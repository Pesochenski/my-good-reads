import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import BookSearch from '../book-search/BookSearch';
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

describe('Checking book search functional', () => {
  test('should correctly render', () => {
    const mockChange = jest.fn();
    act(() => {
      render(<BookSearch wished={items} setWished={mockChange} />, container);
    });

    const input: HTMLElement | null = document.querySelector('input');
    expect(input?.className).toBe('book-container__input');
  });
});