import * as React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Container from '@mui/material/Container'

export default function RootLayout() {
  return (
      <Container maxWidth={false} disableGutters>
        <Navbar></Navbar>
        <main>
          <Outlet></Outlet>
        </main>
      </Container>
  )
}