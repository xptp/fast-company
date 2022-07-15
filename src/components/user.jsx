import Qualities from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
  const { users, handleDelete, hadleToggleBookMark } = props;
  return (
    <>
      {users.map((user) => (
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
export default User;
