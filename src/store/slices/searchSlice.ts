import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


export interface SearchState {
  list: Character[];
  searchResults: Character[];
}

const initialState: SearchState = {
  list: [],
  searchResults: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Character[]>) => {
      state.list = action.payload;
    },
    findCharacterByName: (state, action: PayloadAction<string>) => {
      const name = action.payload.toLowerCase();
      state.searchResults = state.list.filter(character =>
        character.name.toLowerCase().includes(name)
      );
    },
  },
});

export const { setList, findCharacterByName } = searchSlice.actions;

export const selectSearchResults = (state: RootState) => state.search.searchResults;

export default searchSlice.reducer;
