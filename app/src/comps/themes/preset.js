import React from 'react'
import { ThemeProvider } from 'theme-ui'
import preset from '@rebass/preset'

export default props =>
  <ThemeProvider theme={preset}>
    {props.children}
  </ThemeProvider>