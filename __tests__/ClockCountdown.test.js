import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClockCountdown from '../src/components/ClockCountdown';

test('renders ClockCountdown component', () => {
  render(<ClockCountdown label="Pomodoro Session" time="25:00" togglePause={() => {}} pause={true} handleReset={() => {}} />);
  const labelElement = screen.getByText(/Pomodoro Session/i);
  expect(labelElement).toBeTruthy();
});

test('calls togglePause function when start/stop button is clicked', () => {
  const togglePauseMock = jest.fn();
  render(<ClockCountdown label="Pomodoro Session" time="25:00" togglePause={togglePauseMock} pause={true} handleReset={() => {}} />);
  fireEvent.click(screen.getByTestId('start-stop'));
  expect(togglePauseMock).toHaveBeenCalled();
});

test('calls handleReset function when reset button is clicked', () => {
  const handleResetMock = jest.fn();
  render(<ClockCountdown label="Pomodoro Session" time="25:00" togglePause={() => {}} pause={true} handleReset={handleResetMock} />);
  fireEvent.click(screen.getByTestId('reset'));
  expect(handleResetMock).toHaveBeenCalled();
});
