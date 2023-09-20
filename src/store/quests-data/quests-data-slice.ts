import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuestsAction } from '../api-actions';
import { FetchingNameSpace, RequestStatus, QuestTypes, QuestDifficulty } from '../../const';
import { QuestsData } from '../../types/types';

const initialState: QuestsData = {
  quests: [],
  fetchingStatusQuests: RequestStatus.Unsent,
  questTypes: QuestTypes.all,
  questDifficulty: QuestDifficulty.any,
};

export const questsData = createSlice({
  name: FetchingNameSpace.Quests,
  initialState,
  reducers:{
    changeQuestType: (state, action: PayloadAction<string>) => {
      state.questTypes = action.payload;
    },
    changeQuestDifficulty: (state, action: PayloadAction<string>) => {
      state.questDifficulty = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.fetchingStatusQuests = RequestStatus.Pending;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.fetchingStatusQuests = RequestStatus.Success;
        state.quests = action.payload;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.fetchingStatusQuests = RequestStatus.Error;
      });
  },
});

export const { changeQuestDifficulty, changeQuestType} = questsData.actions;
