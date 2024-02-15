import React from 'react';

function ThemeSwitcher({ onThemeChange, currentTheme }) {
  const themes = ['light', 'dark', 'green', 'blue', 'red'];

  return (
    <div className="theme-switcher">
      {themes.map((theme) => (
        <div
          key={theme}
          className={`themeSquare ${theme} ${currentTheme === theme ? 'active' : ''}`}
          onClick={() => onThemeChange(theme)}
        ></div>
      ))}
    </div>
  );
}

export default ThemeSwitcher;
