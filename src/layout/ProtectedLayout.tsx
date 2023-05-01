import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Outlet } from 'react-router-dom'

export const ProtectedLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { googleUser, user } = useAuth()

  if (!googleUser || !user) {
    return <h1>Você não tem permissão para acessar essa página.</h1>
  }

  return children || <Outlet />
}
