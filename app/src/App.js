import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { base as system } from '@theme-ui/presets'
import Navbar from './comps/nav/Navbar'

function App () {
  return (
    <ThemeProvider theme={system}>
      <Navbar></Navbar>
    </ThemeProvider>
  )
}
export default App
