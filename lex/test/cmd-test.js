'user strict';

var expect = require('chai').expect;
var hello = require(__dirname + '/../hello');

describe('testing greet.js with no arguments', function() {
  it('should return "hello world"', function() {
    expect (hello.greet()).to.equal('hello, world');
  });
});

describe('test greet.js with arguments', function() {
  beforeEach(function(){
    this.processArgvBackup = process.argv;
    process.argv = ['node', 'path/to/greet.js', 'slug'];
  });

  afterEach(function(){
    process.argv = this.processArgvBackup;
  });

  it('should return "hello slug"', function(){
    expect(hello.greet()).to.equal('hello slug');
  });
});
