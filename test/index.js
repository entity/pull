
/**
 * Test.
 */

var assert = require('assert');
var pull = require('..');

var entity = {
  speak: function(s){
    return this.text + ', ' + s;
  }
};

function Entity(text){
  this.text = text;
}

Entity.prototype.speak = pull('speak', entity);

var human = new Entity('hello');
var doge = new Entity('wow');

assert('hello, world' === human.speak('world')); // => 'hello, world'

// swap implementation
entity.speak = function(s){
  return this.text + '!!1 ' + s;
};

assert('hello!!1 world' === human.speak('world')); // => 'hello!!1 world'
assert('wow!!1 such world  ,many pull' === doge.speak('such world  ,many pull')); // => 'wow!!1 such world  ,many pull'

console.log('done');
