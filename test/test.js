const { assert } = require("chai");

const HelloWorld = artifacts.require("./HelloWorld.sol");

require("chai").use(require("chai-as-promised")).should();

contract("HelloWorld", () => {
  let helloWorld;

  before(async () => {
    helloWorld = await HelloWorld.deployed();
  });

  // check if the app is deployed
  describe("deployment", async () => {
    // it method checks the specific task
    it("deploys successfully", async () => {
      // check if the address is valid
      const address = await helloWorld.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    // checks if the message is retrieved successfully
    it("gets a message", async () => {
      const message = await helloWorld.getMessage();
      assert.equal(message, "Hello, World");
    });

    // check if message can be updated
    it("updates message", async () => {
      await helloWorld.setMessage("New Message");
      const message = await helloWorld.getMessage();
      assert.equal(message, "New Message");
    });
  });
});
