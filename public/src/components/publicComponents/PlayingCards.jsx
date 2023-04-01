import React from "react";

const PlayingCards = () => {
  const cardsData = [
    {
      title: "Hello There",
      image: `../assets/image/game/ak (1).jpeg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (23).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (22).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (16).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (17).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (18).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (19).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (20).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (21).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (7).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (8).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (9).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (10).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (11).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (12).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (13).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (14).jpg`,
    },
    {
      title: "Hello There",
      image: `../assets/image/game/ak (15).jpg`,
    },
  ];
  return (
    <div className="PlayingCards">
      {cardsData.map((ele, i) => {
        return (
          <div className="game-card" key={i}>
            <div className="card_image relative">
              <img src={ele.image} alt="hello" />
              <div className="">
                <button className="game-card-image-details  ">
                  <span className="material-symbols-rounded flex items-center justify-center text-5xl rounded-[50px] w-[50px] h-[50px] bg-yellow-200">
                    play_arrow
                  </span>
                  <span className="text-white mt-2">Monopoly</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayingCards;
