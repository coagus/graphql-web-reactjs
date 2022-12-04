import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ReactElement } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { AuthGuard } from './guards'
import { PublicRoutes } from './models'
import { Home, Login } from './pages'
import { RoutesWithNotFound } from './utilities'
import { GlobalStyle } from './GlobalStyle'

const client = new ApolloClient({
  uri: 'http://localhost:3001/api',
  cache: new InMemoryCache(),
})

const App = (): ReactElement => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path='/' element={<Home />} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
      <GlobalStyle />
    </ApolloProvider>
  )
}

export default App
