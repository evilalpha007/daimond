import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://167.71.224.189:5000/",
  }),

  endpoints: (builder) => ({
    GetCricketMatches: builder.query({
      query: () => ({
        url: "/cricket",
      }),
    }),
    GetSoccerMatches: builder.query({
      query: () => ({
        url: "/soccer",
      }),
    }),
    GetTennisMatches: builder.query({
      query: () => ({
        url: "/tennis",
      }),
    }),
    GetGameIdMarket: builder.query({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
  }),
});

export const {
  useGetCricketMatchesQuery,
  useGetSoccerMatchesQuery,
  useGetTennisMatchesQuery,
  useGetGameIdMarketQuery,
} = mainApi;

// idar use pass kardo or fir call kara lo jaha karwana hai
// http://marketsarket.in:3000/getsoccermatches
//  http://marketsarket.in:3000/gettennismatches

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const mainApi = createApi({
//   reducerPath: "mainApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://marketsarket.in:3000",
//   }),

//   endpoints: (builder) => ({
//     GetCricketMatches: builder.query({
//       query: () => ({
//         url: "/getcricketmatches",
//       }),
//     }),
//     GetSoccerMatches: builder.query({
//       query: () => ({
//         url: "/getsoccermatches",
//       }),
//     }),
//     GetTennisMatches: builder.query({
//       query: () => ({
//         url: "/gettennismatches",
//       }),
//     }),
//   }),
// });

// // Cricket:
// // http://marketsarket.in:3000/getcricketmatches
// // Soccer:
// // http://marketsarket.in:3000/getsoccermatches
// // Tennis:
// // http://marketsarket.in:3000/gettennismatches

// export const {
//   useGetCricketMatchesQuery,
//   useGetSoccerMatchesQuery,
//   useGetTennisMatchesQuery,
// } = mainApi;
// // idar use pass kardo or fir call kara lo jaha karwana hai
// // http://marketsarket.in:3000/getsoccermatches
// //  http://marketsarket.in:3000/gettennismatches
