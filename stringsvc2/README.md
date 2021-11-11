#build
go build .

#run
./stringsv2

#test
curl -XPOST -d'{"s":"hello, world"}' localhost:8080/uppercase