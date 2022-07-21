import React, { useState } from "react";
import User from "./user";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = (props) => {
  const { handleDelete, users, hadleToggleBookMark } = props;
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    // console.log("page", pageIndex);
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      <SearchStatus users={users} />
      {count > 0 && (
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
              userCrop={userCrop}
              handleDelete={handleDelete}
              hadleToggleBookMark={hadleToggleBookMark}
            />
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
Users.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  hadleToggleBookMark: PropTypes.func.isRequired
};

export default Users;
