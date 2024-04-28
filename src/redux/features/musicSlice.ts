import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MusicInterface } from '../../interface/musicInterface';

interface TodoState {
  musics: MusicInterface[];
  loading: boolean
}



const initialState: TodoState = {
  musics: [],
  loading: false
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    getMusicLoading: (state) => { // to load function in saga file
      state.loading = true
    },
    createMusicLoading: (state, action: PayloadAction<MusicInterface>) => {
      state.loading = true
    },


    getMusic: (state, action: PayloadAction<MusicInterface[]>) => { // get music list from saga and add to music store
      state.loading = false
      state.musics = [...action.payload];

    },
    deleteMusic: (state, action: PayloadAction<string>) => {
      state.musics = state.musics.filter((music) => music._id !== action.payload);
    },
    addMusic: (state, action: PayloadAction<MusicInterface>) => {
      state.musics.push(action.payload);
      state.loading = false

    },

  },
});

export const { getMusicLoading, getMusic, deleteMusic, addMusic, createMusicLoading } = musicSlice.actions;
export const musicReducer = musicSlice.reducer;