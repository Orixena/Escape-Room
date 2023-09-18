import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { FetchingNameSpace } from '../../const';
import { QuestsData } from '../../types/types';

export const getQuests = createSelector(
  (state: State) => state[FetchingNameSpace.Quests],
  (state: QuestsData) => state.quests
);

export const getFetchingStatusQuests = createSelector(
  (state: State) => state[FetchingNameSpace.Quests],
  (state: QuestsData) => state.fetchingStatusQuests
);

export const getQuestType = createSelector(
  (state: State) => state[FetchingNameSpace.Quests],
  (state: QuestsData) => state.questTypes
);

export const getQuestDifficulty = createSelector(
  (state: State) => state[FetchingNameSpace.Quests],
  (state: QuestsData) => state.questDifficulty
);
