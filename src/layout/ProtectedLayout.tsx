import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Outlet } from 'react-router-dom'

export const ProtectedLayout = ({ children }: { children?: JSX.Element }) => {
  const { googleUser } = useAuth()

  if (!googleUser?.uid) {
    return <h1>Você não tem permissão para acessar essa página.</h1>
  }

  return children || <Outlet />
}
