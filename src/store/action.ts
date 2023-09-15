import {createAction} from '@reduxjs/toolkit';
import { TQuest } from '../types/types';
import { AuthorizationStatus } from '../const';

// export const setQuests = createAction<TQuest[]>('setQuests');

export const loadQuests = createAction<TQuest[]>('data/loadQuests');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');


