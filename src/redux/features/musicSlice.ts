import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MusicInterface } from '../../interface/musicInterface';

interface TodoState {
  todos: MusicInterface[];
  loading: boolean
}



const initialState: TodoState = {
  todos: [],
  loading: false
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    addMusic: (state, action: PayloadAction<MusicInterface>) => {
      state.todos.push(action.payload);

    },
    
  },
});

export const { addMusic } = musicSlice.actions;
export const musicReducer = musicSlice.reducer;