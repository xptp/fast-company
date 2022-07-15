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
export default Qualities;
