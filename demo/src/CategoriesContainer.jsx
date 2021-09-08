import React from 'react';

import { useSelector } from 'react-redux';

import Categories from './Categories';

export default function CategoiesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <Categories categories={categories} />
  );
}
