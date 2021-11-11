FROM golang:1.11-alpine

# Add Maintainer Info
LABEL maintainer="Rajeev Singh <rajeevhub@gmail.com>"

RUN mkdir -p $GOPATH/src/crud-protobuf/server
RUN mkdir -p $GOPATH/src/crud-protobuf/crudpb
RUN mkdir -p $GOPATH/src/crud-protobuf/cassandra
RUN mkdir -p $GOPATH/src/crud-protobuf/redis

COPY ./crudpb/crudpb.pb.go $GOPATH/src/crud-protobuf/crudpb/
COPY ./server/server.go $GOPATH/src/crud-protobuf/server/
COPY ./cassandra/main.go $GOPATH/src/crud-protobuf/cassandra/
COPY ./redis/main.go $GOPATH/src/crud-protobuf/redis/

WORKDIR $GOPATH/src/crud-protobuf/server

RUN apk add --no-cache git
RUN go get -d -v "github.com/mediocregopher/radix.v2"
RUN go get "github.com/gocql/gocql"
RUN go get "google.golang.org/grpc"

EXPOSE 8080