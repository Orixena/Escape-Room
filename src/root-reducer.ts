import { combineReducers } from '@reduxjs/toolkit';
import { FetchingNameSpace } from './const';
import { userData } from './store/user-data/user-data.slice';
import { questsData } from './store/quests-data/quests-data-slice';
import { questData } from './store/quest-data/quest-data.slice';

export const rootReducer = combineReducers({
  [FetchingNameSpace.User]: userData.reducer,
  [FetchingNameSpace.Quests]: questsData.reducer,
  [FetchingNameSpace.Quest]: questData.reducer,
});
