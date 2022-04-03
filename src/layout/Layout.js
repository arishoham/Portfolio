import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children, setLocation}) => {
  return (
    <Container>
      <Header setLocation={setLocation}/>
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
