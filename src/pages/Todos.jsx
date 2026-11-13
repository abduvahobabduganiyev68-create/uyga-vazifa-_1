import React, { useState, useEffect } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Barcha Todolar</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;