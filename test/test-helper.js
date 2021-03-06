module.exports = {
  expect: require('chai').expect,
  queue: require('../lib/queue'),
  letterDecoder: require('../lib/letter-decoder'),
  letterEncoder: require('../lib/letter-encoder'),
  decoder: require('../lib/word-decoder'),
  encoder: require('../lib/word-encoder'),
  stream: require('../lib/stream'),
  fileEncoder: require('../lib/file-encoder'),
  fileDecoder: require('../lib/file-decoder'),
  parallelEncoder: require('../lib/parallel-encoder'),
  parallelDecoder: require('../lib/parallel-decoder')
};