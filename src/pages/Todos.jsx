import React, { useState, useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div>
      <h2>200 ta Todo ro'yxati</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <a href={`#todo-${todo.id}`}>{todo.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;