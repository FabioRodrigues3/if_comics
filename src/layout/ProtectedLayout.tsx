import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Outlet } from 'react-router-dom'

interface ProtectedLayoutProps {
  children: JSX.Element
}

export const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const { email } = useAuth()

  if (email) {
    return <h1>Você não tem permissão para acessar essa página.</h1>
  }

  return children ? children : <Outlet />
}
