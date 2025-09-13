class Component {
  #internalState = {user:1};

  #logState() {
    console.log(this.#internalState);
  }

  render() {
    this.#logState(); // ✅ private method used internally
  }
}
let c=new Component();
c.render();  //{ user: 1 }


class TestHelper {
  #config;

  constructor(config) {
    this.#config = config;
  }

  getTimeout() {
    return this.#config.timeout ?? 5000;
  }
}
let t =new TestHelper({ timeout: 100 });
console.log(t.getTimeout());