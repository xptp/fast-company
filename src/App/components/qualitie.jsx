import React from "react";
import PropTypes from "prop-types";
const Qualities = (props) => {
  const { user } = props;
  return (
    <>
      {user.qualities.map((qualities) => (
        <span
          key={qualities._id}
          className={`badge bg-${qualities.color} m-1 p-2`}
        >
          {qualities.name}
        </span>
      ))}
    </>
  );
};
Qualities.propTypes = {
  user: PropTypes.object.isRequired
};
export default Qualities;
