import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { TQuest, TDetailedQuest, AuthData, AuthorizedUser, BookingQuest } from '../types/types.js';
import { redirectToRoute } from './action';
import { ApiRoute, AppRoute, FetchingNameSpace } from '../const';
import { dropToken, saveToken } from '../services/token.js';

//import { clearFavorites } from './favorites-data/favorites-data.slice.js';

export const fetchQuestsAction = createAsyncThunk<
  TQuest[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${FetchingNameSpace.Quests}/fetchQuests`, async (_arg, { extra: api }) => {
  const { data } = await api.get<TQuest[]>(ApiRoute.GetQuests);
  return data;
});

export const fetchQuestAction = createAsyncThunk<
TDetailedQuest,
  TQuest['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${FetchingNameSpace.Quest}/fetchBooking`, async (id, { extra: api }) => {
  const { data } = await api.get<TDetailedQuest>(
    `${ApiRoute.GetDetailedQuest}/${id}`
  );
  return data;
});

export const fetchBookingAction = createAsyncThunk<
  BookingQuest[],
  TQuest['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${FetchingNameSpace.Quest}/booking`, async (id, { extra: api }) => {
  const { data } = await api.get<BookingQuest[]>(
    `${ApiRoute.GetDetailedQuest}/${id}/booking`
  );
  console.log(data);
  return data;
});

export const checkAuthAction = createAsyncThunk<
  AuthorizedUser,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${FetchingNameSpace.User}/checkAuth`, async (_arg, { extra: api }) => {
  const { data } = await api.get<AuthorizedUser>(ApiRoute.Login);

  return data;
});

export const loginAction = createAsyncThunk<
  AuthorizedUser,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${FetchingNameSpace.User}/login`,
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data, status } = await api.post<AuthorizedUser>(ApiRoute.Login, {
      email,
      password,
    });

    if (status >= 200 && status < 300) {
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
    }
    return data;
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${FetchingNameSpace.User}/logout`, async (_arg, { extra: api }) => {
  await api.delete(ApiRoute.Logout);

  dropToken();
  //dispatch(clearFavorites());
});
