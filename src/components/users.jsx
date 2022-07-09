import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUser] = useState(api.users.fetchAll());

  // Удаление
  const handleDelete = (id) => {
    setUser((prevState) => prevState.filter((user) => user !== id));
  };

  // Кол-во пользователей
  const renderPharse = () => {
    if (users.length === 0) {
      return <h1 className="btn btn-danger">Никто с тобой не тусанет</h1>;
    }
    if (users.length > 0 && users.length === 1) {
      return (
        <h1 className="btn btn-primary">
          {users.length} человек тусанет с тобой сегодня
        </h1>
      );
    }
    if (users.length <= 4 && users.length > 1) {
      return (
        <h1 className="btn btn-primary">
          {users.length} человека тусанут с тобой сегодня
        </h1>
      );
    }
    if (users.length > 4) {
      return (
        <h1 className="btn btn-primary">
          {users.length} человек тусанет с тобой сегодня
        </h1>
      );
    }
  };

  return (
    <>
      {renderPharse()}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Професия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((qualities) => {
                  return (
                    <span className={`badge bg-${qualities.color} p-2 m-1`}>
                      {qualities.name}
                    </span>
                  );
                })}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;

// {/* key={user.id} */}
// {users.map(() => (
//   <tr>
//     <td>1</td>
//     <td>2</td>
//     <td>3</td>
//     <td>4</td>
//     <td>5</td>
//     <td>
//       <button>удалить</button>
//     </td>
//   </tr>
// ))}
