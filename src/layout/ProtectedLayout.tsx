import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Outlet } from 'react-router-dom'

export const ProtectedLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { email } = useAuth()

  if (email) {
    return <h1>Você não tem permissão para acessar essa página.</h1>
  }

  return children || <Outlet />
}
