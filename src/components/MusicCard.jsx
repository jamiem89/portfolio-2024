import { useEffect, useState } from "react";

const MusicCard = () => {
  const [albums, setAlbums] = useState([]);
  const [artistString, setArtistString] = useState("");

  // Fetch albums data

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jamiem89&format=json&period=7day&limit=3&api_key=${
          import.meta.env.PUBLIC_LASTFM_API_KEY
        }`
      );

      const data = await response.json();

      const albumsData = data.topalbums.album;
      let artistText = "";

      albumsData.forEach((album) => {
        const artist = album.artist.name;
        const albumCover = album.image[3]["#text"];
        const title = album.name;

        setAlbums((prevState) => [...prevState, { artist, albumCover, title }]);

        if (!artistText.includes(artist)) {
          if (!artistText.length) {
            artistText = `${artist}`;
          } else {
            artistText += `, ${artist}`;
          }
        }
      });

      setArtistString(artistText);
    };

    fetchAlbums();
  }, []);

  return (
    <article className="relative rounded-3xl bg-white p-6 md:p-10 flex flex-col col-span-1 md:col-span-5 lg:col-span-4 md:min-h-[450px] overflow-hidden js-fade-up">
      <h3 className="text-black text-h3 md:text-h3Med md:max-w-[425px] mb-2">
        Lover of music
      </h3>
      <p className="mb-3">
        Here’s what i’ve been listening to lately: {artistString}
      </p>
      <span className="uppercase font-extrabold text-tiny text-bright-purple">
        {String.fromCharCode(42)} Data grabbed from the Last.fm API
      </span>
      {/* Album covers */}
      <div className="absolute flex justify-center bottom-0 left-0 w-full h-1/2">
        {albums.map((album) => (
          <div
            key={album.title}
            className="absolute -bottom-3 w-1/2 origin-bottom-center rotate-[20deg] z-10 translate-x-32 first:-translate-x-0 first:rotate-0 first:z-20 last:-translate-x-32 last:-rotate-[20deg]"
          >
            <img src={album.albumCover} alt={album.title} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default MusicCard;
