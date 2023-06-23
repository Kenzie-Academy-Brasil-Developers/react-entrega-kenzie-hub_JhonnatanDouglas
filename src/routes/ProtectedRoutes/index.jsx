import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../../providers/userProvider'

export const ProtectedRoutes = () => {
  const { userData } = useContext(userContext)

  return userData ? <Outlet /> : <Navigate to='/' />
}
