
# pull

method invocator factory

## Installing

`npm install entity/pull`

`component install entity/pull`

## Example

```js
var pull = require('pull');

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
```

## API

### fn = pull(method, obj)

Factories a function that
will invoke `method` from `obj`.

## License

MIT
