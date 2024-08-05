import { configureStore } from "@reduxjs/toolkit";
import foundationsReducer from "./slices/foundationSlice";
import stockWasteReducer from "./slices/stockWasteSlice";
import tableauReducer from "./slices/tableauSlice";

export const store = configureStore({
  reducer: {
    foundations: foundationsReducer,
    stockWaste: stockWasteReducer,
    tableau: tableauReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
