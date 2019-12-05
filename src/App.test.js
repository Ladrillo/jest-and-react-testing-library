import React from 'react';
// step 1 - the imports
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

// step 2 - set up the cleanup
afterEach(rtl.cleanup)
// beforeEach, beforeAll, afterAll

it('renders without crashing', () => {
  // step 3 - mount the component we want to test
  const wrapper = rtl.render(<App />)
  // wrapper.debug()
  // step 4 - capture the element of interest BY "READABLE" PROPERTY
  // we normally care about the readable text
  // or the aria attributes (screen readers)
  const learnReactElement = wrapper.queryByText(/learn react/i)
  // step 5 - assert that the element is there
  expect(learnReactElement).toBeInTheDocument()
});

it('insults the user correctly', () => {
  const wrapper = rtl.render(<App insult='moron' />)
  const insult = wrapper.queryByText(/moron/i)
  expect(insult).toBeInTheDocument()
  expect(insult).toBeVisible()
})
