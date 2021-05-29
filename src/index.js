import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'pages/Root'
import { ThemeModeProvider } from 'context/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <Root />
    </ThemeModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
