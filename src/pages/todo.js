import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Web3Container from "../../lib/Web3Container";
function Todo({ web3, accounts, contract }) {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleAddTask = async () => {
    await contract.methods.createTask(input).send({ from: accounts[0] });
  };
  const handleToggled = async (id) => {
    await contract.methods.toggleCompleted(id).send({ from: accounts[0] });
  };
  const get = async () => {
    const taskCount = parseInt(
      await contract.methods.tasksCount(accounts[0]).call({ from: accounts[0] })
    );
    for (var i = 0; i < taskCount; i++) {
      const task = await contract.methods
        .tasks(accounts[0], i)
        .call({ from: accounts[0] });
      if (i == 0) setTasks([]);
      setTasks((pre) => [
        ...pre,
        {
          id: parseInt(task.id),
          content: task.content,
          completed: task.completed,
        },
      ]);
    }
  };
  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <main className="">
        <h3>Todo List</h3>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Task name"
        />
        <button onClick={handleAddTask}>ADD</button>
        <button onClick={get}>GET</button>
        <div>
          {tasks.length > 0 &&
            tasks.map((task) => (
              <div key={task.id}>
                <span>{task.id}.</span>
                <br />
                <span>Task: {task.content}</span>
                <br />
                <span>Task Status: {task.completed.toString()}</span>
                <br />
                <button onClick={() => handleToggled(task.id)}>Done</button>
              </div>
            ))}
        </div>
      </main>
      <div>
        <Link href="/accounts">My Accounts</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </>
  );
}

export default function Index() {
  return (
    <Web3Container
      renderLoading={() => <div>Loading...</div>}
      render={({ web3, accounts, contract }) => (
        <Todo web3={web3} accounts={accounts} contract={contract} />
      )}
      name="todo"
    />
  );
}
