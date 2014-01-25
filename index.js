
/*!
 *
 * pull
 *
 * method invocator factory
 *
 * MIT
 *
 */

module.exports = pull;

/**
 * Factories a function that
 * will invoke `method` from `obj`.
 *
 * @param {String} method
 * @param {Object} obj
 * @return {Function}
 * @api public
 */

function pull(method, obj){
  return function(){
    return obj[method].apply(this, arguments);
  };
}
