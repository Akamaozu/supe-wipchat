module.exports = function( task, config ){
  if( ! config ) config = {};

  require( '../steps/get-viewer' )( task );

  task.step( 'ensure response has no errors', function(){
    var res = task.get( 'wipchat-api-response' ),
        is_api_key_valid = res && res.data && res.data.viewer && res.data.viewer.id ? true : false;

    task.set( 'is-wipchat-api-key-valid', is_api_key_valid );
    task.next();
  });
}