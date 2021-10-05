import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

test('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
  }));
  const { getByText } = render((
    <MemoryRouter>
      <RegionsContainer />
    </MemoryRouter>
  ));

  expect(getByText('서울')).not.toBeNull();

  fireEvent.click(getByText('서울'));

  expect(dispatch).toBeCalled();
});
