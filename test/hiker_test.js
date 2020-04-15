var assert = require('assert');

const hiker = require('../src/hiker.js');

describe('Answer', function() {
  it('to life the universe and everything', function() {
    assert.equal(hiker.answer(), 42);
  });
});
