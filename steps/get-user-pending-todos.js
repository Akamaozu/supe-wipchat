var send_api_request = require( './send-api-request' );

module.exports = function( task, config ){
  if ( ! config ) config = {};

  var user_id = config.user_id;
  send_api_request( task, { request: { query: get_user_pending_todos_query( user_id ) }});
}

function get_user_pending_todos_query( user_id ){
  if( ! user_id ) throw new Error( 'user id not specified' );

  return ''
    + '{'
      + 'user(id: ' + user_id + ') {'
        + 'todos(completed: false, limit: 999999) {'
          + 'id '
          + 'body '
          + 'created_at '
          + 'updated_at '
        + '}'
      + '}'
    + '}';
}