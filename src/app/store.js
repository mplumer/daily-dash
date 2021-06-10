import { configureStore } from "@reduxjs/toolkit";
import backgroundImageReducer from "../features/backgroundImage/backgroundImageSlice";
import quoteReducer from "../features/quote/quoteSlice";
import weatherReducer from "../features/weather/weatherSlice";

export default configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    weather: weatherReducer,
    quote: quoteReducer
  }
});
