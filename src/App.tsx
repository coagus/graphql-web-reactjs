import { ReactElement } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { AuthGuard } from './guards'
import { PublicRoutes } from './models'
import { Home, Login } from './pages'
import { RoutesWithNotFound } from './utilities'

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route element={<AuthGuard />}>
          <Route path='/' element={<Home />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}

export default App
