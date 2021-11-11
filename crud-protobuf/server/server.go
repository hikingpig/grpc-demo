package main

import (
	"context"
	"crud-protobuf/cassandra"
	"crud-protobuf/crudpb"
	"fmt"
	"log"
	"net"

	"crud-protobuf/redis"

	"github.com/gocql/gocql"
	"google.golang.org/grpc"
)

type server struct{}

func (*server) Create(ctx context.Context, req *crudpb.CreateRequest) (*crudpb.CreateResponse, error) {
	var result string
	firstName := req.GetAccount().GetFirstName()
	lastName := req.GetAccount().GetLastName()
	id := gocql.TimeUUID()

	if err := cassandra.Session.Query(`
		INSERT INTO accounts (id, firstName, lastName) VALUES (?, ?, ?)`,
		id, firstName, lastName).Exec(); err != nil {
		return nil, err
	}
	redis.SetAccount(id.String(), &crudpb.Account{
		FirstName: firstName,
		LastName:  lastName,
	})
	result = fmt.Sprintf("id for %s : %s", firstName, id)
	return &crudpb.CreateResponse{
		Result: result,
	}, nil
}

func (*server) Get(ctx context.Context, req *crudpb.GetRequest) (*crudpb.GetResponse, error) {
	id := req.GetId()
	res, err := redis.FindAccount(id)
	if err == redis.ErrNoAccount {
		var firstName, lastName string
		if err := cassandra.Session.Query(`
		SELECT * FROM accounts WHERE id = ?`,
			id).Scan(&id, &firstName, &lastName); err != nil {
			return nil, err
		}
		fmt.Printf("Get User with id %s successfully\n", id)
		return &crudpb.GetResponse{
			Account: &crudpb.Account{
				FirstName: firstName,
				LastName:  lastName,
			},
		}, nil
	} else if err != nil {
		return nil, err
	}
	return &crudpb.GetResponse{
		Account: res,
	}, nil
}

func (*server) Update(ctx context.Context, req *crudpb.UpdateRequest) (*crudpb.UpdateResponse, error) {
	firstName := req.GetAccount().GetFirstName()
	lastName := req.GetAccount().GetLastName()
	id := req.GetId()

	if err := cassandra.Session.Query(`
		UPDATE accounts SET firstName = ?, lastName = ? WHERE id = ?`,
		firstName, lastName, id).Exec(); err != nil {
		return nil, err
	}
	if err := redis.SetAccount(id, &crudpb.Account{
		FirstName: firstName,
		LastName:  lastName,
	}); err != nil {
		return nil, err
	}
	result := "successfully updated account for id" + id
	return &crudpb.UpdateResponse{
		Result: result,
	}, nil
}

func (*server) Delete(ctx context.Context, req *crudpb.DeleteRequest) (*crudpb.DeleteResponse, error) {
	id := req.GetId()
	if err := cassandra.Session.Query(`
		DELETE FROM accounts WHERE id = ?`,
		id).Exec(); err != nil {
		return nil, err
	}
	if err := redis.DeleteAccount(id); err != nil {
		return nil, err
	}

	result := "Successfully Delete User with id " + id
	return &crudpb.DeleteResponse{
		Result: result,
	}, nil
}

func main() {
	cassandraSession := cassandra.Session
	defer cassandraSession.Close()

	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	s := grpc.NewServer()
	crudpb.RegisterCrudServiceServer(s, &server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
