import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
// use for hamburger menu 
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'

function ResponsiveAppBar () {
  const theme = useTheme(); 

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='static' elevation={0}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
            sx={{
              ml: 4,
              mr: 7,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            tracki
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button variant='text' href='/about' sx={{color: 'secondary.main'}}>About</Button>
            <Button variant='text' href='/demo' sx={{color: 'secondary.main'}}>Demo</Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="hamburger"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={null}
              color = "inherit"
            >
              <MenuIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
