package redis

import (
	"crud-protobuf/crudpb"
	"errors"
	"fmt"
	"log"

	"github.com/mediocregopher/radix.v2/pool"
)

var db *pool.Pool
var ErrNoAccount = errors.New("redis: no account found")

func init() {
	var err error
	db, err = pool.New("tcp", "redis:6379", 10)
	if err != nil {
		log.Panic(err)
	}
	fmt.Println("redis init done")
}

func populateAccount(reply map[string]string) (*crudpb.Account, error) {
	return &crudpb.Account{
		FirstName: reply["FirstName"],
		LastName:  reply["LastName"],
	}, nil
}

func FindAccount(id string) (acc *crudpb.Account, err error) {
	conn, err := db.Get()
	if err != nil {
		return nil, err
	}
	defer db.Put(conn)
	reply, err := conn.Cmd("HGETALL", id).Map()
	if err != nil {
		return nil, err
	} else if len(reply) == 0 {
		return nil, ErrNoAccount
	}
	fmt.Println("find account in redis")
	return populateAccount(reply)
}

func SetAccount(id string, acc *crudpb.Account) error {
	conn, err := db.Get()
	if err != nil {
		return err
	}
	defer db.Put(conn)
	conn.Cmd("HSET", id, "FirstName", acc.GetFirstName(), "LastName", acc.GetLastName())
	fmt.Println("set account in redis")
	return nil
}

func DeleteAccount(id string) error {
	conn, err := db.Get()
	if err != nil {
		return err
	}
	defer db.Put(conn)
	conn.Cmd("DEL", id)
	fmt.Println("Delete account in redis")
	if err != nil {
		return err
	}
	return nil
}
