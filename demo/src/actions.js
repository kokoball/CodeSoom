import { fetchCategories } from './services/api';

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function changeRestaurantField({ name, value }) {
  return {
    type: 'changeRestaurantField',
    payload: {
      name,
      value,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
export function loadRestaurants() {
  return async (dispatch) => {
    // TODO: fetch...
    const restaurants = [];
    // TODO: load restaurants from API server.
    // 1. API server 확보
    // 2. fetch
    dispatch(setRestaurants(restaurants));
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
export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setRestaurants(categories));
  };
}
