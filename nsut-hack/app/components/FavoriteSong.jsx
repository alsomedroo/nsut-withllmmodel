import React from "react";

const FavoriteSong = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="text-4xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 font-bold [text-shadow:0_0_rgba(0,0,0,0.1)] mb-14 text-center">
          ✨ Vibe These Days ✨
        </h2>
      </div>
      <div className="favorite-song-section flex flex-wrap justify-center gap-8">
        <iframe
          src="https://open.spotify.com/embed/track/4zUPL2OPTO3hgNhjaA1Rjn?utm_source=generator"
          width="30%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/track/2VgbvKdaSOXWByBKYgBsEc?utm_source=generator"
          width="30%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe src="https://open.spotify.com/embed/track/3TAhWtQnpoL5Vl9VQPl9fU?utm_source=generator" width="30%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default FavoriteSong;
