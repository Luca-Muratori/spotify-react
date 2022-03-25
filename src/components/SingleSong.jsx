const SingleSong = ({ title, artist, duration, getSong }) => {
  return (
    <div onClick={getSong}>
      <div></div>
      <div>
        <span>{title}</span>
        <span>{artist}</span>
      </div>
      <div>{duration.toFixed(1)}</div>
    </div>
  );
};
export default SingleSong;
