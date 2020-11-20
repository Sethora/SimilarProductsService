/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import SuggestedProductsCarousel from './SuggestedProductsCarousel.jsx';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it ('does not render carousel if there are no items to display in state', () => {
  act(() => {
    // render components
    render(<SuggestedProductsCarousel similarDisplayed={[]} />, container);
  });
  // make assertions
  expect(container.textContent).toBe('');
});