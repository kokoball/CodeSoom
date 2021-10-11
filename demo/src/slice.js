import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  nams: '',
  initialState: '',
  reducers: {},

});

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
  loginFields: {},
  accessToken: '',
  reviewFields: {
    ...initialReviewFields,
  },
};

export {
  actions,
  reducer,
};
