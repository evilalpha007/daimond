import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oddValue: undefined,
  color: "",
  activeMatch: undefined,
  eventApiAddress: undefined,
  activeMatchEvent: undefined,
  mobileActiveBetTiltCard: undefined,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    handelActiveMatch: (state, { payload }) => {
      state.activeMatch = payload.activeMatch;
      state.eventApiAddress = payload.eventApiAddress;
    },
    handelBetTilt: (state, { payload }) => {
      state.color = payload.color;
      state.oddValue = payload.oddValue;
      state.activeMatchEvent = payload.activeMatchEvent;
      if (payload?.oddValueSoccerTennis) {
        if (payload?.oddValueSoccerTennis[0]?.odds) {
          state.oddValue = payload?.oddValueSoccerTennis[0]?.odds;
        } else {
          state.oddValue = 0;
        }
      }
    },
    handelMobileActiveBetTiltCard: (state, { payload }) => {
      state.mobileActiveBetTiltCard = payload;
    },
    handelMobileActiveBetTiltCardUpdate: (state, { payload }) => {
      const updatedCard = state.mobileActiveBetTiltCard.map((ele) => {
        if (ele.id == payload) {
          ele.active = true;
        } else {
          ele.active = false;
        }
        return ele;
      });
      state.mobileActiveBetTiltCard = updatedCard;
    },
  },
});

export const {
  handelBetTilt,
  handelActiveMatch,
  handelMobileActiveBetTiltCard,
  handelMobileActiveBetTiltCardUpdate,
} = eventSlice.actions;

export default eventSlice.reducer;
