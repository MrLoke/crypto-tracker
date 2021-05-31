import { lazy, Suspense } from 'react'
import Navbar from 'components/Navbar/Navbar'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme'
import { GlobalStyle } from 'theme/GlobalStyles'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const CurrencyPage = lazy(() => import('pages/CurrencyPage/CurrencyPage'))
const NotFound = lazy(() => import('pages/NotFound/NotFound'))

const Root = () => {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Router>
          <Suspense fallback={<LoadingSpinner fullScreen />}>
            <Navbar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/currency/:name' component={CurrencyPage} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default Root