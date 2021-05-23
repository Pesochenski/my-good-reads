import React from 'react';
import Wishlist from '../wishlist';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
const defaultJSON = require('../../sampleJSONResponse.json');

let container: DocumentFragment | HTMLDivElement | Element;
const items = defaultJSON.items;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
});

describe('Checking wishlist functional', () => {
  test('should correctly render and then remove item', () => {
    const mockChange = jest.fn();
    act(() => {
      render(<Wishlist wished={items} setWished={mockChange} />, container);
    })

    const title: HTMLElement | null = document.querySelector('h1');
    expect(title?.innerHTML).toBe('Wishlist 10');

    const btn: HTMLButtonElement | null = document.querySelector('.wishlist__item-btn');
    expect(btn?.innerHTML).toBe('Delete');

    act(() => {
      btn?.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(mockChange).toBeCalledTimes(1);
  });
});
