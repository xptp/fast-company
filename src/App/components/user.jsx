import Qualities from "./qualitie";
import Bookmark from "./bookmark";
import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  const { handleDelete, hadleToggleBookMark, userCrop } = props;
  return (
    <>
      {userCrop.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>
            <Qualities user={user} />
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td>
            <Bookmark hadleToggleBookMark={hadleToggleBookMark} user={user} />
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(user._id)}
            >
              Удалить
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};
User.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  hadleToggleBookMark: PropTypes.func.isRequired,
  userCrop: PropTypes.array.isRequired
};
export default User;
