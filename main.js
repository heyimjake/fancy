var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: 'a57e7ac8de6d4a4587c25e6e3e658698',
  clientSecret: '4261e23a3ccf4feba348d08250282fbe',
  redirectUri: 'http://www.example.com/callback'
});

spotifyApi.getPlaylist('1BcJavE1LFBoy8lsWJ8W6P')
  .then(function(data) {
    console.log('Some information about this playlist', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });


  setInterval(spotifyApi.getPlaylist('1BcJavE1LFBoy8lsWJ8W6P')
  .then(function(data) {
    console.log('Some information about this playlist', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  }));()=>{  alert("Hello"); }, 3000;
