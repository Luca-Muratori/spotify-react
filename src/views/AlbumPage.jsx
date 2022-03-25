import { useEffect, useState } from "react";
import { fetchAlbum } from "../APIcalls/apicall";
import SingleSong from "../components/SingleSong";
import { Link, useParams } from "react-router-dom";

const AlbumPage = (props) => {
  const [album, setAlbum] = useState({});
  const params = useParams();
  useEffect(() => {
    console.log(params.id);
    fetchAlbum(params.id).then((res) => setAlbum(res));
  }, []);
  return (
    <div>
      <div>
        <img src={album.cover_medium} alt="album-pic" />
        <h2>{album.title}</h2>
        <Link to={"/artist/" + album?.artist?.id}>
          <h3>{album?.artist?.name}</h3>
        </Link>
        <span>
          {album?.release_date?.slice(0, 4)} ∙ {album?.tracks?.data.length}{" "}
          SONGS
        </span>
      </div>
      <div>
        {album?.tracks?.data.map((track) => (
          <SingleSong
            getSong={() =>
              props.passSong({ ...track, cover: album.cover_medium })
            }
            title={track.title}
            artist={track.artist.name}
            duration={track.duration / 60}
            key={track.id}
          />
        ))}
      </div>
    </div>
  );
};
export default AlbumPage;
