//Using # for Private Fields in Classes (ES2020+)
//This is the modern, native way to declare private members in classes:
//Anything prefixed with # is truly private and inaccessible outside the class.

class User {
  #password; // private field

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  #encrypt() { // private method
    return `***${this.#password}***`;
  }

  showEncryptedPassword() {
    return this.#encrypt();
  }
}

const u = new User("Nithya", "secret123");
//console.log(u.name); // "Nithya"
console.log(u.#password); // ❌ SyntaxError
// SyntaxError: Private field '#password' must be declared in an enclosing class
console.log(u.showEncryptedPassword()); // "***secret123***"
