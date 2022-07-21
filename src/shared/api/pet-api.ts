import { apiConfig } from './api-config';
import { PetApi } from './axios-client';

export const petApi = new PetApi(apiConfig);
