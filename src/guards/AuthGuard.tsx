import { PublicRoutes } from '@/models'
import { getToken } from '@/utilities'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthGuard = (): React.ReactElement => {
  return getToken() != null ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  )
}

export default AuthGuard
