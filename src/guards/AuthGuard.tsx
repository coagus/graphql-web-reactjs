import { PublicRoutes } from '@/models'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthGuard = (): React.ReactElement => {
  const valid = true

  return valid ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard
