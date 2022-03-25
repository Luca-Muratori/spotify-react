import { fetchArtist } from "../APIcalls/apicall";
import { useEffect, useState } from "react";
import SingleAlbum from "../components/SingleAlbum";
import SingleSong from "../components/SingleSong";
import { useParams } from "react-router-dom";
const ArtistPage = () => {
  const [artist, setArtist] = useState({});
  const params = useParams();
  useEffect(() => {
    fetchArtist(params.id).then((res) => setArtist(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <img src={artist.picture_xl} alt="artist-pic" />
      <div>
        <div>{artist?.nb_fan} MONTHLY LISTENERS</div>
        <h1>{artist?.name}</h1>
      </div>
      <h2>Albums</h2>
      <div>
        {artist?.albums?.map((album) => (
          <SingleAlbum src={album.cover_medium} key={album.id} />
        ))}
      </div>
      <h2>Top tracks</h2>
      <div>
        {artist?.tracklist?.map((song) => (
          <SingleSong
            title={song.title}
            artist={song.artist.name}
            duration={song.duration / 60}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};
export default ArtistPage;
