import { configureStore } from "@reduxjs/toolkit";
import { articleSlice } from "./article.slice";
import { authSlice } from "./auth.slice";

export const rootReducer = {
  article: articleSlice.reducer,
  auth: authSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
