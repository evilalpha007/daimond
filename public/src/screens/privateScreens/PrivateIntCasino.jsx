import React, { useState } from "react";
import PrivateTopToggleList from "../../components/protectedComponents/PrivateTopToggleList";

export default function PrivateIntCasino() {
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
  const [options, setoptions] = useState([
    { title: "Evolution Gaming	", active: true },
    { title: "EZUGI", active: false },
    { title: "AE SEXY", active: false },
    { title: "Bombay Live", active: false },
    { title: "OneTouch", active: false },
    { title: "Gamzix", active: false },
    { title: "BetGames.TV", active: false },
  ]);

  return (
    <>
      <PrivateTopToggleList options={options} setoptions={setoptions} />
      <div className="PlayingCards w-full p-2">
        {cardsData.map((ele, i) => {
          return (
            <div className="casino_card" key={i}>
              <div className="card_image relative">
                <img src={ele.image} className="min-h-[150px]" alt="hello" />
                <div className="">
                  <button className="casino_name  ">{ele.name}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
