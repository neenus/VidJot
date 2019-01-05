const dotenv = require('dotenv').config();

if(process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: process.env.MLAB_URI
  };
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  };
}