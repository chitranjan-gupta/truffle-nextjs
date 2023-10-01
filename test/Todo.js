const Todo = artifacts.require("./Todo.sol");

contract("Todo", (accounts) => {
  it("...should create a task.", async () => {
    const todoInstance = await Todo.deployed();

    await todoInstance.createTask("Todo", { from: accounts[0] });

    const len = await todoInstance.getCount({ from: accounts[0] });
    let isPresent = false;
    for (let i = 0; i < len; i++) {
      const task = await todoInstance.getTask(i);
      if (task.content == "Todo") {
        isPresent = true;
      }
    }
    assert.equal(isPresent, true, "The task is not created.");
  });
  it("...should change the value.", async () => {
    const todoInstance = await Todo.deployed();

    const len = await todoInstance.getCount({ from: accounts[0] });
    let index = -1;
    for (let i = 0; i < len; i++) {
      const task = await todoInstance.getTask(i);
      if (task.content == "Todo") {
        index = i;
      }
    }
    if(index > -1){
      await todoInstance.toggleCompleted(index);
      const task = await todoInstance.getTask(index);
      assert.equal(task.completed, true, "The value is not changed.");
    }else{
      assert.equal(false, true, "The value is not found.");
    }
  });
});
