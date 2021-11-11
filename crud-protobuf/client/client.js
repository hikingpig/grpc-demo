console.log("Hello there")
const {
  CreateRequest,
  Account,
  GetRequest,
  UpdateRequest,
  DeleteRequest,
} = require('./crudpb_pb');
const { CrudServiceClient } = require('./crudpb_grpc_web_pb');

var client = new CrudServiceClient('http://' + 'envoy' + ':8080',
  null, null);

function create() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var request = new CreateRequest();
  var account = new Account()
  account.setFirstName(firstname)
  account.setLastName(lastname)
  request.setAccount(account)
  console.log("=========== request", request)
  client.create(request, {}, (err, response) => {
    if (err) {
      console.log("error: ", err)
    } else {
      console.log("response: ", response);
      document.getElementById("result").innerHTML = response.getResult()
    }
  });
}

function get() {
  var id = document.getElementById("userid").value;
  request = new GetRequest();
  request.setId(id)
  client.get(request, {}, (err, response) => {
    if (err) {
      console.log("error: ", err)
    } else {
      console.log("response: ", response)
      document.getElementById("result").innerHTML = response.getAccount();
    }
  })
}

function update() {
  var id = document.getElementById("userid-u").value;
  var firstname = document.getElementById("firstname-u").value;
  var lastname = document.getElementById("lastname-u").value;
  var request = new UpdateRequest();
  var account = new Account()
  account.setFirstName(firstname)
  account.setLastName(lastname)
  request.setId(id)
  request.setAccount(account)
  console.log("=========== request", request)
  client.update(request, {}, (err, response) => {
    if (err) {
      console.log("error: ", err)
    } else {
      console.log("response: ", response);
      document.getElementById("result").innerHTML = response.getResult()
    }
  });
}

function deleteUser() {
  var id = document.getElementById("userid-d").value;
  request = new DeleteRequest();
  request.setId(id)
  client.delete(request, {}, (err, response) => {
    if (err) {
      console.log("error: ", err)
    } else {
      console.log("response: ", response)
      document.getElementById("result").innerHTML = response.getResult();
    }
  })
}

document.getElementById("create").onclick = function () {
  create();
};
document.getElementById("get").onclick = function () {
  get();
};
document.getElementById("update").onclick = function () {
  update();
};
document.getElementById("deleteUser").onclick = function () {
  deleteUser();
};