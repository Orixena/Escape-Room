import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { QuestData } from '../../types/types';
import { FetchingNameSpace } from '../../const';

export const getQuest = createSelector(
  (state: State) => state[FetchingNameSpace.Quest],
  (state: QuestData) => state.quest
);

export const getFetchingStatusQuest = createSelector(
  (state: State) => state[FetchingNameSpace.Quest],
  (state: QuestData) => state.fetchingStatusQuest
);
