var request = require('request');

module.exports = function( task, config ){
  if( ! config ) config = {};

  var api_request = config.request;
  if( ! api_request ) throw new Error( 'No WIP.chat api request specified' );

  var verbose = config.hasOwnProperty( 'verbose' ) ? config.verbose : process.env.WIPCHAT_VERBOSE;

  task.step( 'send request to wip.chat api', function(){
    var api_url = task.get( 'wipchat-api-url' ),
        private_key = task.get( 'wipchat-private-key' );

    request({
      method: 'POST',
      uri: api_url,
      body: api_request,
      json: true,
      headers: {
        'Authorization': 'bearer ' + private_key,
        'Content-Type': 'application/json'
      }
    }, function( error, raw_body, res ){
      if( error ) return task.end( error );

      task.set( 'wipchat-api-response', res );
      task.next();
    });
  });
}