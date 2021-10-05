import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  context('with type', () => {
    it('renders label and input control', () => {
      const handleChange = jest.fn();

      const { queryByLabelText } = render((
        <TextField
          label="평점"
          type="number"
          name="score"
          onChange={handleChange}
        />
      ));

      expect(queryByLabelText('평점')).not.toBeNull();
    });
  }); 31;

  //  it('listens change event', () => {
  //   const handleChange = jest.fn();

  //   const { getByLabelText } = render((
  //     <TextField
  //       onChange={handleChange}
  //     />
  //   ));

  //   const controls = [
  //     { label: '평점', name: 'score', value: '5' },
  //     { label: '리뷰 내용', name: 'description', value: '정말 최고 :)' },
  //   ];

  //   controls.forEach(({ label, name, value }) => {
  //     fireEvent.change(getByLabelText(label), { target: { value } });

  //     expect(handleChange).toBeCalledWith({ name, value });
  //   });
  // });
});
