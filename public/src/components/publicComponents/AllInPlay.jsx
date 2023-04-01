import React from "react";
import Slider from "react-slick";
const AllInPlay = () => {
  const allPlayIcon = [
    {
      name: "All Sports",
      img: "material-symbols-rounded text-4xl",
      iconName: "laundry",
    },
    {
      name: "All Sports",
      img: "material-symbols-rounded text-4xl",
      iconName: "sports_soccer",
    },
    {
      name: "All Sports",
      img: "material-symbols-rounded text-4xl",
      iconName: "sports_basketball",
    },
    {
      name: "All Sports",
      img: "material-symbols-rounded text-4xl",
      iconName: "sports_cricket",
    },
    {
      name: "All Sports",
      img: "material-symbols-rounded text-4xl",
      iconName: "sports_tennis",
    },
    {
      name: "All Sports",
      img: "material-symbols-rounded text-4xl",
      iconName: "military_tech",
    },
    {
      name: "All Sports",
      img: "material-symbols-rounded text-4xl",
      iconName: "sports_hockey",
    },
    {
      name: "All Sports",
      img: "material-symbols-rounded text-4xl",
      iconName: "laundry",
    },
  ];
  const settings = {
    className:
      "slider variable-width h-[100px] rounded-[15px] bg-[#383f52] ml-[20px] mr-[20px]",
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="AllInPlay  ">
        <h2 className="text-white text-2xl  ml-4 font-bold mb-5">
          All In-Play
        </h2>
        <Slider {...settings}>
          {allPlayIcon.map((ele, i) => {
            return (
              <div
                style={{ width: 100 }}
                key={i}
                className="py-5 flex items-center justify-center flex-col"
              >
                <span className={ele.img}>{ele.iconName}</span>
                <p>{ele.name}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default AllInPlay;

// const AllInPlay = () => {

//   return (
//     <div className="AllInPlay">
//       <h2 className="text-white text-2xl font-bold">All In-Play</h2>
//       <div className="allinplay">
//         {allPlayIcon.map((ele, i) => {
//           return (
//             <>
//               <div className="allplay_icon">
//                 <span className={ele.img}>{ele.iconName}</span>
//                 <span>{ele.name}</span>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// <Slider {...settings}>
// <div className="allinplay">
//   {allPlayIcon.map((ele, i) => {
//     return (
//       <>
//         <div
//           className="allplay_icon  bg-red-500"
//           style={{ width: 150 }}
//         >
//           <span className={ele.img}>{ele.iconName}</span>
//           <span>{ele.name}</span>
//         </div>
//       </>
//     );
//   })}
// </div>
// </Slider>
// export default AllInPlay;
