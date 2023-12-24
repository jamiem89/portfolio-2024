import { useEffect, useState } from "react";

const MusicCard = () => {
  const [albums, setAlbums] = useState([]);

  // Fetch albums data

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jamiem89&format=json&period=1month&limit=3&api_key=${
          import.meta.env.PUBLIC_LASTFM_API_KEY
        }`
      );

      const data = await response.json();

      const albumsData = data.topalbums.album;

      albumsData.forEach((album) => {
        const artist = album.artist.name;
        const albumCover = album.image[3]["#text"];

        setAlbums((prevState) => [...prevState, { artist, albumCover }]);
      });
    };

    fetchAlbums();
  }, []);

  return (
    <article className="rounded-3xl bg-white p-6 md:p-10 flex flex-col col-span-1 md:col-span-5 lg:col-span-4 md:min-h-[450px]">
      <h3 className="text-black text-h3 md:text-h3Med md:max-w-[425px] mb-2">
        Lover of music
      </h3>
      {console.log(albums)}
      <p className="mb-3">
        Here’s what i’ve been listening to lately: Kendrick Lamarr, Taylor Swift
        and Kanye West.
      </p>

      <span className="uppercase font-extrabold text-tiny text-bright-purple">
        {String.fromCharCode(42)} Data grabbed from the Last.fm API
      </span>

      {/* Album covers */}
      <div className="">
        {albums.map((album) => (
          <img src={album.albumCover} />
        ))}
      </div>
    </article>
  );
};

export default MusicCard;
