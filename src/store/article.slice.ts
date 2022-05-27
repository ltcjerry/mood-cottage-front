import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

interface State {
  openState: boolean;
}

const initState: State = {
  openState: false,
};

export const articleSlice = createSlice({
  name: "articleSlice",
  initialState: initState,
  reducers: {
    openModal(state) {
      state.openState = true;
    },
    closeModal(state) {
      state.openState = false;
    },
  },
});

export const articleAction = articleSlice.actions;

export const selectArticleOpenState = (state: RootState) =>
  state.article.openState;
