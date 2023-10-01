// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Todo.sol";
import "../contracts/Utils.sol";

contract TestTodo{

    function testItCreateATask() public{
        Utils utils = new Utils();
        Todo todo = Todo(DeployedAddresses.Todo());

        todo.createTask("Hello");
        string memory expected = "Hello";
        uint len = todo.getCount();
        bool isPresent = false;
        for(uint i=0;i<len;i++){
            if(utils.compareStrings(todo.getTask(i).content, expected)){
                isPresent = true;
            }
        }
        Assert.equal(isPresent, true, "It should be able to create a task.");
    }

    function testItChangeValue() public{
        Utils utils = new Utils();
        Todo todo = Todo(DeployedAddresses.Todo());
        string memory expected = "Hello";
        uint len = todo.getCount();
        uint index = 0;
        for(uint i=0;i<len;i++){
            if(utils.compareStrings(todo.getTask(i).content, expected)){
                index = i;
            }
        }
        todo.toggleCompleted(index);
        Assert.equal(todo.getTask(index).completed, true, "It should be able to change the value.");
    }
}