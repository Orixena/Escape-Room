import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuestsAction } from '../api-actions';
import { FetchingNameSpace, RequestStatus } from '../../const';
import { QuestsData } from '../../types/types';

const initialState: QuestsData = {
  quests: [],
  fetchingStatusQuests: RequestStatus.Unsent,
};

export const questsData = createSlice({
  name: FetchingNameSpace.Quests,
  initialState,
  reducers:{},
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
      // .addCase(addFavorite.fulfilled, (state, action) => {
      //   const updateOffer = action.payload;
      //   const currentOffer = state.offers.findIndex((offer) => offer.id === updateOffer.id);
      //   if (currentOffer > -1) {
      //     state.offers[currentOffer].isFavorite = true;
      //   }
      // })
      // .addCase(deleteFavorite.fulfilled, (state, action) => {
      //   const updateOffer = action.payload;
      //   const currentOffer = state.offers.findIndex((offer) => offer.id === updateOffer.id);

      //   if (currentOffer > -1) {
      //     state.offers[currentOffer].isFavorite = false;
      //   }
      // });
  },
});
