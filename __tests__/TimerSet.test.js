import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TimerSet from '../src/components/TimerSet';

test('renders TimerSet component', () => {
  render(<TimerSet title="Pomodoro" label="session" decrease={() => {}} time={25} increase={() => {}} />);
  const titleElement = screen.getByText(/Pomodoro/i);
  expect(titleElement).toBeTruthy();
});

test('calls increase function when increment button is clicked', () => {
  const increaseMock = jest.fn();
  render(<TimerSet title="Pomodoro" label="session" decrease={() => {}} time={25} increase={increaseMock} />);
  fireEvent.click(screen.getByTestId('session-increment'));
  expect(increaseMock).toHaveBeenCalled();
});

test('calls decrease function when decrease button is clicked', () => {
  const decreaseMock = jest.fn();
  render(<TimerSet title="Pomodoro" label="break" decrease={decreaseMock} time={25} increase={() => {}} />);
  fireEvent.click(screen.getByTestId('break-decrement'));
  expect(decreaseMock).toHaveBeenCalled();
});
