import React from "react";
import "../../css/casinoCard.css";
export default function PrivateCasinoScreen() {
  const cardsData = [
    {
      name: "Hello There",
      image: `../assets/image/game/ak (1).jpeg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (23).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (22).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (16).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (17).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (18).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (19).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (20).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (21).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (7).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (8).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (9).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (10).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (11).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (12).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (13).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (14).jpg`,
    },
    {
      name: "Hello There",
      image: `../assets/image/game/ak (15).jpg`,
    },
  ];
  return (
    <div className="gap-2 w-full p-2 grid grid-cols-4 PlayingCards">
      {cardsData.map((ele, i) => {
        return (
          <div className="casino_card" key={i}>
            <div className="card_image relative flex flex-col h-full">
              <img
                src={ele.image}
                className="min-h-[100px] h-full w-full object-cover "
                alt="hello"
              />
              <div className="">
                <button className="casino_name  ">{ele.name}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
