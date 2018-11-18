var send_api_request = require( './send-api-request' ),
    get_viewer_query = '{ viewer { id username }}';

module.exports = function( task, config ){
  if( ! config ) config = {};

  send_api_request( task, { request: { query: get_viewer_query }, verbose: true });
}