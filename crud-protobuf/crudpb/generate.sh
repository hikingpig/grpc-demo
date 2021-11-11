protoc -I=. crudpb.proto \
  --go_out=plugins=grpc:. \
  --js_out=import_style=commonjs:../client/ \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../client/