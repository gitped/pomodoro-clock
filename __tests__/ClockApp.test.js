import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClockApp from '../src/ClockApp';

test('renders ClockApp component', () => {
  render(<ClockApp />);
  const titleElement = screen.getByText("Pomodoro");
  expect(titleElement).toBeTruthy();
});