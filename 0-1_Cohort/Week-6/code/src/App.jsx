/* eslint-disable react/prop-types */
// import { useState } from "react";

import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval({}=> {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      })
    }, 10000)
  }),
      []
    }

  return (
    <div>
      {todos.length}
      {todos.map((todo) => (
        <Todo
          key={todo.key}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}

function Todo(title, description) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}

export default App;
