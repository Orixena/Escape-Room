import {createAction} from '@reduxjs/toolkit';
import { TQuest } from '../types/types';

export const setQuests = createAction<TQuest[]>('setQuests');

