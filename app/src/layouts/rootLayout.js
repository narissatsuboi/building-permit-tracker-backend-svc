import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import theme from '../themes/theme'

const RootLayout = () => {
  return (
    // <ThemeProvider theme={theme}>
      // <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Navbar></Navbar>
        <main>
          <Outlet></Outlet>
        </main>
      </Container>
    // </ThemeProvider>
  )
}

export default RootLayout

{
  /* <div>
<Outlet></Outlet>
<Footer></Footer>
</div> */
}
