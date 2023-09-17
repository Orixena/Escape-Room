import { createReducer } from '@reduxjs/toolkit';
import { loadQuests} from './action';
import { TQuest } from '../types/types';

type InitialState = {
  quests: TQuest[];
}

const initialState: InitialState = {
  quests: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests,(state,action) => {
      state.quests = action.payload;
    });
});

export {reducer};
