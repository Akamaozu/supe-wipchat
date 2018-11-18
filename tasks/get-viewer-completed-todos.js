module.exports = function( task, config ){

  require('../steps/get-viewer')( task );

  task.step( 'extract viewer user id', function(){
    var res = task.get( 'wipchat-api-response' ),
        user_id = res.data.viewer.id;

    task.set( 'wipchat-api-viewer-user-id', user_id );
    task.next();
  });

  task.step( 'get viewer pending todos', function(){
    var viewer_user_id = task.get( 'wipchat-api-viewer-user-id' );

    require( '../steps/get-user-completed-todos' )( task, { user_id: viewer_user_id });
    task.next();
  });
}