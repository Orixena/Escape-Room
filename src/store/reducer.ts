import { createReducer } from '@reduxjs/toolkit';
import { setQuests, loadQuests, requireAuthorization } from './action';
import { TQuest } from '../types/types';
import { AuthorizationStatus } from '../const';

type InitialState = {
  quests: TQuest[];
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  quests: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests,(state,action) => {
      state.quests = action.payload;
    })
    .addCase(requireAuthorization,(state,action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
