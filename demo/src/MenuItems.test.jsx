import React from 'react';

import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

describe('MenuItems', () => {
  context('with menu items', () => {
    it('renders menu items', () => {
      const menuItems = [
        { id: 1, name: '공기밥' },
      ];

      const { container } = render(<MenuItems menuItems={menuItems} />);

      expect(container).toHaveTextContent('공기밥');
    });
  });

  context('with undefined munu items', () => {
    it('renders no items message', () => {
      const { container } = render(<MenuItems />);

      expect(container).toHaveTextContent('메뉴가 없어요');
    });
  });

  context('without 0 menu items', () => {
    it('renders no items message', () => {
      const menuItems = [];

      const { container } = render(<MenuItems menuItems={menuItems} />);

      expect(container).toHaveTextContent('메뉴가 없어요');
    });
  });
});
