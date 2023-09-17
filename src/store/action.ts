import {createAction} from '@reduxjs/toolkit';
import { AppRoute,AuthorizationStatus } from '../const';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

