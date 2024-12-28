import React from 'react'

import "./theme.css";
import "./style.css";

import useLocalStorage from './useLocalStorage'

function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  function handleToggleTheme() {
    setTheme(theme == 'light' ? 'dark' : 'light');
  }

  return (
    <div className='light-dark-mode'>
      <div className='heading'>
        <h2>Light Dark Mode</h2>
      </div>
      <div className='LDM-container' data-theme={theme}>
        <p>Dark Mode</p>
        <button onClick={handleToggleTheme} >Light Mode</button>
      </div>
    </div>
  )
}

export default LightDarkMode
