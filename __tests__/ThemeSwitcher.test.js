import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeSwitcher from '../src/components/ThemeSwitcher';

test('renders ThemeSwitcher component', () => {
  render(<ThemeSwitcher onThemeChange={() => {}} />);
  const themeSwitcherElement = screen.getByTestId('theme-switcher');
  expect(themeSwitcherElement).toBeTruthy();
});

test('calls onThemeChange function when a theme square is clicked', () => {
  const onThemeChangeMock = jest.fn();
  render(<ThemeSwitcher onThemeChange={onThemeChangeMock} />);
  fireEvent.click(screen.getByTestId('theme-square-light'));
  expect(onThemeChangeMock).toHaveBeenCalled();
});