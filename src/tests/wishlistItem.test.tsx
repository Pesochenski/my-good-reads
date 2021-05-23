import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import WishlistItem from '../wishlist/wishlistItem';
const defaultJSON = require('../../sampleJSONResponse.json');

let container: DocumentFragment | HTMLDivElement | Element;
const item = defaultJSON.items[0];

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
});

describe('Checking wishlist item functional', () => {
  test('shound correctly render and be removed', () => {
    const mockDelete = jest.fn();
    act(() => {
      render(<WishlistItem item={item} deletingFunc={mockDelete} />, container);
    });

    const title: HTMLElement | null = document.querySelector('h2');
    expect(title?.innerHTML).toBe('JavaScript &amp; jQuery: The Missing Manual');

    const btn: HTMLButtonElement | null = document.querySelector('.wishlist__item-btn');
    expect(btn?.innerHTML).toBe('Delete');

    act(() => {
      btn?.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(mockDelete).toBeCalledTimes(1);
  });
});