import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'pages/Root'
import { ThemeModeProvider } from 'context/ThemeContext'
import { AppCtxProvider } from 'context/AppContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <ThemeModeProvider>
        <AppCtxProvider>
          <Root />
        </AppCtxProvider>
      </ThemeModeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
