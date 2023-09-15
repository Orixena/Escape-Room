import { createReducer, current } from '@reduxjs/toolkit';
import { setQuests} from './action';
import { TQuest } from '../types/types';

type InitialState = {
  quests: TQuest[];
}

const initialState: InitialState = {
  quests: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuests,(state,action) => {
      state.quests = action.payload;
      console.log('setQuests', current(state));
    });
});

export {reducer};
