import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
  const [users, setUser] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUser(users.filter((user) => user._id !== userId));
  };

  const hadleToggleBookMark = (id) => {
    const i = users.findIndex((s) => {
      return s._id === id;
    });
    const newUsers = [...users];
    newUsers[i].bookmark = !newUsers[i].bookmark;
    setUser(newUsers);
  }
  return (
    <div>
      <Users handleDelete={handleDelete} hadleToggleBookMark={hadleToggleBookMark} users={users} />
    </div>
  );
}

export default App;
