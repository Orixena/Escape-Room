import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuestAction, fetchBookingAction } from '../api-actions';
import { FetchingNameSpace, RequestStatus } from '../../const';
import { QuestData, TDetailedQuest, BookingQuest } from '../../types/types';

const initialDetailedQuest: TDetailedQuest = {
  id: '',
  title: '',
  previewImg: '',
  previewImgWebp: '',
  level: '',
  type: '',
  peopleMinMax: [],
  description: '',
  coverImg: '',
  coverImgWebp: '',
};

const initialQuestPlace: BookingQuest = {
  id: '',
  location: {
    coords: [],
    address: ''
  },
  slots: {
    today: [],
    tomorrow:[],
  }
};

const initialState: QuestData = {
  quest: initialDetailedQuest,
  fetchingStatusQuest: RequestStatus.Unsent,
  bookingInfo: [],
  isBookingInfoLoaded: false,
  selectedQuestPlaceId: '',
  selectedQuestPlace: initialQuestPlace,
};

export const questData = createSlice({
  name: FetchingNameSpace.Quest,
  initialState,
  reducers: {
    setQuestPlaceId: (state, action: PayloadAction<string>) => {
      state.selectedQuestPlaceId = action.payload;
    },
    setSelectedQuestPlace: (state, action: PayloadAction<BookingQuest>) => {
      state.selectedQuestPlace = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestAction.pending, (state) => {
        state.fetchingStatusQuest = RequestStatus.Pending;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.fetchingStatusQuest = RequestStatus.Success;
        state.quest = action.payload;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.fetchingStatusQuest = RequestStatus.Error;
        state.quest = initialDetailedQuest;
      })
      .addCase(fetchBookingAction.pending, (state) => {
        state.isBookingInfoLoaded = false;
      })
      .addCase(fetchBookingAction.fulfilled, (state, action) => {
        state.bookingInfo = action.payload;
        state.isBookingInfoLoaded = true;
      });
  }
});

export const { setQuestPlaceId, setSelectedQuestPlace } = questData.actions;
