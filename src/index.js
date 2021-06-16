import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'pages/Root'
import { ThemeModeProvider } from 'context/ThemeContext'
import { AppCtxProvider } from 'context/AppContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeModeProvider>
        <AppCtxProvider>
          <Root />
        </AppCtxProvider>
      </ThemeModeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
