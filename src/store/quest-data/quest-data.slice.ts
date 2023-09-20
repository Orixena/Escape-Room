import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuestAction, fetchBookingAction, postFormData, fetchReservedQuests, deleteReservedQuest } from '../api-actions';
import { FetchingNameSpace, RequestStatus } from '../../const';
import { QuestData, TDetailedQuest, BookingQuest, QuestFormData } from '../../types/types';

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

const initialFormData: QuestFormData = {
  date: '',
  time: '',
  contactPerson: '',
  phone: '',
  withChildren: false,
  peopleCount: 0,
  placeId: '',
};


const initialState: QuestData = {
  quest: initialDetailedQuest,
  fetchingStatusQuest: RequestStatus.Unsent,
  bookingInfo: [],
  isBookingInfoLoaded: false,
  selectedQuestPlaceId: '',
  selectedQuestPlace: initialQuestPlace,
  questFormData: initialFormData,
  formSendingStatus: RequestStatus.Unsent,
  reservedQuests: [],
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
    setFormDate: (state, action: PayloadAction<string>) => {
      state.questFormData.date = action.payload;
    },
    setFormTime: (state, action: PayloadAction<string>) => {
      state.questFormData.time = action.payload;
    },
    setFormPlaceId: (state, action: PayloadAction<string>) => {
      state.questFormData.placeId = action.payload;
    },
    dropFormSendingStatus(state) {
      state.formSendingStatus = RequestStatus.Unsent;
    }
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
      })
      .addCase(postFormData.pending, (state) => {
        state.formSendingStatus = RequestStatus.Pending;
      })
      .addCase(postFormData.fulfilled, (state) => {
        state.formSendingStatus = RequestStatus.Success;
      })
      .addCase(postFormData.rejected, (state) => {
        state.formSendingStatus = RequestStatus.Error;
      })
      .addCase(fetchReservedQuests.fulfilled, (state, action) => {
        state.reservedQuests = action.payload;
      })
      .addCase(deleteReservedQuest.fulfilled, (state, action) => {
        const updateQuest = action.payload;
        state.reservedQuests = state.reservedQuests.filter((item) => item.quest.id !== updateQuest.id);
      });
  }
});

export const { setQuestPlaceId, setSelectedQuestPlace, setFormDate, setFormTime, setFormPlaceId, dropFormSendingStatus } = questData.actions;
