
/**
 * Example.
 */

var pull = require('./');

var entity = {
  speak: function(s){
    console.log(this.text + ', ' + s);
  }
};

function Entity(text){
  this.text = text;
}

Entity.prototype.speak = pull('speak', entity);

var human = new Entity('hello');
var doge = new Entity('wow');

human.speak('world'); // => 'hello, world'

// swap implementation
entity.speak = function(s){
  console.log(this.text + '!!1 ' + s);
};

doge.speak('such world  ,many pull'); // => 'wow!!1 such world  ,many pull'
