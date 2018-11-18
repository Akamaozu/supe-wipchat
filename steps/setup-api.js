var api_url = 'https://wip.chat/graphql';

module.exports = function( task, config ){
  if( ! config ) config = {};

  var private_key = config.private_key || process.env.WIPCHAT_PRIVATE_KEY;
  if( ! private_key ) throw new Error( 'WIP.chat Private Key not found' );

  var verbose = config.hasOwnProperty( 'verbose' ) ? config.verbose : process.env.WIPCHAT_VERBOSE;

  task.set( 'wipchat-private-key', private_key );
  task.set( 'wipchat-api-url', api_url );

  if( verbose ) console.log( 'wipchat api setup completed' );
}