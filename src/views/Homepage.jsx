import "./Homepage.css";
import SingleAlbum from "../components/SingleAlbum";
import { fetchMusic } from "../APIcalls/apicall";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [greenDay, setGreenDay] = useState([]);
  const [kesha, setKesha] = useState([]);
  const [maneskin, setManeskin] = useState([]);
  useEffect(() => {
    fetchMusic("bruce springsteen").then((res) => setGreenDay(res));
    fetchMusic("kesha").then((res) => setKesha(res));
    fetchMusic("maneskin").then((res) => setManeskin(res));
  }, []);
  return (
    <div>
      {/* Section 1 */}
      <h2>Best album </h2>
      <div>
        {greenDay &&
          greenDay.slice(0, 6).map((song) => (
            <Link to={"album/" + song.album.id} key={song.id}>
              {" "}
              <SingleAlbum src={song.album.cover_medium} />{" "}
            </Link>
          ))}
      </div>
      {/* Section 2 */}
      <h2>New Generation</h2>
      <div>
        {kesha &&
          kesha.slice(0, 6).map((song) => (
            <Link to={"album/" + song.album.id} key={song.id}>
              {" "}
              <SingleAlbum src={song.album.cover_medium} />{" "}
            </Link>
          ))}
      </div>
      <h2>Italian pride</h2>
      <div>
        {maneskin &&
          maneskin.slice(0, 6).map((song) => (
            <Link to={"album/" + song.album.id} key={song.id}>
              {" "}
              <SingleAlbum src={song.album.cover_medium} />{" "}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Homepage;
