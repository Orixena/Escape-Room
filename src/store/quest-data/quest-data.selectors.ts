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

export const getBookingQuestInfo = createSelector(
  (state: State) => state[FetchingNameSpace.Quest],
  (state: QuestData) => state.bookingInfo
);

export const getBookingQuestInfoLoadingStatus = createSelector(
  (state: State) => state[FetchingNameSpace.Quest],
  (state: QuestData) => state.isBookingInfoLoaded
);

export const getSelectedQuestPlaceId = createSelector(
  (state: State) => state[FetchingNameSpace.Quest],
  (state: QuestData) => state.selectedQuestPlaceId
);

export const getSelectedQuestPlace = createSelector(
  (state: State) => state[FetchingNameSpace.Quest],
  (state: QuestData) => state.selectedQuestPlace
);
