import React, { useState } from "react";
import User from "./user";
import SearchStatus from "./searchStatus";

const Users = (props) => {
  const { handleDelete, users, hadleToggleBookMark } = props;
  return (
    <>
      <SearchStatus users={users} />
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Професия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
            </tr>
          </thead>
          <tbody>
            <User
              users={users}
              handleDelete={handleDelete}
              hadleToggleBookMark={hadleToggleBookMark}
            />
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
