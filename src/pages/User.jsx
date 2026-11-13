import React, { useState, useEffect } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  return (
    <div>
      <h2>Foydalanuvchilar ro'yxati</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setSelectedUser(user)} style={{ cursor: "pointer", margin: "8px 0" }}>
            <b>{user.name}</b> ({user.username})
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h3>User haqida ma'lumot</h3>
          <p>Ismi: {selectedUser.name}</p>
          <p>Username: {selectedUser.username}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Telefon: {selectedUser.phone}</p>
          <p>Website: {selectedUser.website}</p>
          <p>Shahar: {selectedUser.address?.city}</p>

          <button onClick={() => setSelectedUser(null)}>Yopish</button>
        </div>
      )}
    </div>
  );
};

export default User;