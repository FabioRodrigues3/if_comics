import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Container } from './styles'
import { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
export function DefaultLayout() {
  const { setGoogleUser } = useAuth()
  const userKey = Object.keys(window.sessionStorage).filter((it) =>
    it.startsWith('firebase:authUser'),
  )[0]

  console.log(userKey)
  const data = JSON.parse(sessionStorage.getItem(userKey)!)
  console.log(data)

  useEffect(() => {
    setGoogleUser(data)
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}
