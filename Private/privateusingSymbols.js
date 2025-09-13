//Symbols can be used to hide properties from casual access:(Obscure but Effective))
//Not truly private, but hard to access without the symbol reference.
const _secret = Symbol("secret");
const user = {
  [_secret]: "hiddenValue",
  getSecret: function () {
    return this[_secret];
  }
};

console.log(user.getSecret()); // "hiddenValue"
console.log(user._secret);     // undefined ❌
