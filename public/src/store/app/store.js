import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import eventReducer from "../features/eventSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { mainApi } from "../services/mainApi";

const reducer = {
  [mainApi.reducerPath]: mainApi.reducer,
  auth: authReducer,
  event: eventReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});
setupListeners(store.dispatch);
