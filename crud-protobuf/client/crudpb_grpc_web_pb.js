/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./crudpb_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.CrudServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.CrudServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateRequest,
 *   !proto.CreateResponse>}
 */
const methodInfo_CrudService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreateResponse,
  /** @param {!proto.CreateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CrudServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CrudService/Create',
      request,
      metadata || {},
      methodInfo_CrudService_Create,
      callback);
};


/**
 * @param {!proto.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateResponse>}
 *     A native promise that resolves to the response
 */
proto.CrudServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CrudService/Create',
      request,
      metadata || {},
      methodInfo_CrudService_Create);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetRequest,
 *   !proto.GetResponse>}
 */
const methodInfo_CrudService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetResponse,
  /** @param {!proto.GetRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetResponse.deserializeBinary
);


/**
 * @param {!proto.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CrudServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CrudService/Get',
      request,
      metadata || {},
      methodInfo_CrudService_Get,
      callback);
};


/**
 * @param {!proto.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetResponse>}
 *     A native promise that resolves to the response
 */
proto.CrudServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CrudService/Get',
      request,
      metadata || {},
      methodInfo_CrudService_Get);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateRequest,
 *   !proto.UpdateResponse>}
 */
const methodInfo_CrudService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdateResponse,
  /** @param {!proto.UpdateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CrudServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CrudService/Update',
      request,
      metadata || {},
      methodInfo_CrudService_Update,
      callback);
};


/**
 * @param {!proto.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateResponse>}
 *     A native promise that resolves to the response
 */
proto.CrudServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CrudService/Update',
      request,
      metadata || {},
      methodInfo_CrudService_Update);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteRequest,
 *   !proto.DeleteResponse>}
 */
const methodInfo_CrudService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeleteResponse,
  /** @param {!proto.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CrudServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CrudService/Delete',
      request,
      metadata || {},
      methodInfo_CrudService_Delete,
      callback);
};


/**
 * @param {!proto.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeleteResponse>}
 *     A native promise that resolves to the response
 */
proto.CrudServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CrudService/Delete',
      request,
      metadata || {},
      methodInfo_CrudService_Delete);
};


module.exports = proto;

