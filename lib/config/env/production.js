'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://chrisdhanaraj:kzy0grx5prb9@widmore.mongohq.com:10000/projectfast'
  }
};