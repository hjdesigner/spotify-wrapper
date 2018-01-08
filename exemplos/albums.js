/* to run: babel-node albums.js */

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQCepTLxckaCpUiIrh3FutXQYTj4lZ-CH7QSuNTFfTM-Nh9x-QxeRXV9IqXEBjiGdPgS_h92GGMq1K20HNXuUcUNgn8O6O7HtZSkfEVnt4j71Pb4lhZNfOvhPY1wugea0NVCOpqxyFt_YrnXxA'
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));