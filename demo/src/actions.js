import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './services/api';

import { saveItem } from './services/storage';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function setRestaurant(restaurant) {
  return {
    type: 'setRestaurant',
    payload: {
      restaurant,
    },
  };
}

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: {
      regionId,
    },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: {
      categoryId,
    },
  };
}

export function loadInitialDate() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      selectedRegion: region,
      selectedCategory: category,
    } = getState();

    if (!region || !category) {
      return;
    }
    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });
    dispatch(setRestaurants(restaurants));
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}

export function changeLoginField({ name, value }) {
  return {
    type: 'changeLoginField',
    payload: { name, value },
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function requestLogin() {
  // state = email, password
  // HTTP POST <- email, password
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    const accessToken = postLogin({ email, password });
    // TODO: 로그인 성공하면 -> localstorage에 저장
    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}
export function logout() {
  return {
    type: 'logout',
  };
}

export function changeReviewField({ name, value }) {
  return {
    type: 'changeReviewField',
    payload: { name, value },
  };
}

export function clearReviewFields() {
  return {
    type: 'clearReviewFields',
  };
}

export function setReviews(reviews) {
  return {
    type: 'setReviews',
    payload: { reviews },
  };
}

export function loadRebiew({ restaurantId }) {
  return async (dispatch) => {
    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setReviews(restaurant.reviews));
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { accessToken, reviewFields: { score, description } } = getState();

    // 1. 먼저 지운다.
    await postReview({
      accessToken,
      restaurantId,
      score,
      description,
    });
    // 2. 완료가 되면 지운다.
    dispatch(loadRebiew({ restaurantId }));

    // 3. 업데이트가 끝나면 지운다.
    dispatch(clearReviewFields());
  };
}
