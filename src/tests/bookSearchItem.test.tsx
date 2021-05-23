import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import BookItem from '../book-search/book-search-item';
const defaultJSON = require('../../sampleJSONResponse.json');

let container: DocumentFragment | HTMLDivElement | Element;
const item = defaultJSON.items[0];
const items = defaultJSON.items;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
});

describe('Checking book item functional', () => {
  test('should correctly render', () => {
    const mockAdd = jest.fn();
    const mockErr = jest.fn();
    act(() => {
      render(
        <BookItem 
          item={item} 
          wished={items} 
          setWished={mockAdd} 
          setErr={mockErr} 
        />, 
          container
      );
    });

    const title: HTMLElement | null = document.querySelector('h1');
    expect(title?.innerHTML).toBe('JavaScript &amp; jQuery: The Missing Manual');

    const btn: HTMLButtonElement | null = document.querySelector('button');
    expect(btn?.innerHTML).toBe('Add');
  });
});
