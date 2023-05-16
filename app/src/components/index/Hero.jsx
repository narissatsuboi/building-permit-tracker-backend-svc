import * as React from 'react'
import { Box, Button, styled, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Navbar from '../layout/Navbar'
import heroImg from '../../assets/heroimg.jpg'

export default function Hero () {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }))

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: 'secondary.main',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px'
    }
  }))

  return (
    <Box sx={{ backgroundColor: 'primary.main', minHeight: '80vh' }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: '1' }}>
            <Typography
              variant='body2'
              sx={{
                fontSize: '18px',
                color: 'secondary.main',
                fontWeight: '700',
                mt: 10,
                mb: 4
              }}
            >
              Welcome to tracki
            </Typography>
            <Title variant='h1'>
              Close the loop on your building permits
            </Title>
            <Typography
              variant='body2'
              sx={{ fontSize: '18px', color: 'secondary.main', my: 4 }}
            >
              Visualize permit status' and get notified when they change. 
            </Typography>
            {/* <CustomButton
              backgroundColor='#0F1B4C'
              color='#fff'
              buttonText='More About Us'
              heroBtn={true}
            /> */}
          </Box>

          <Box sx={{ flex: '1.25' }}>
            <img
              src={heroImg}
              alt='heroImg'
              style={{ maxWidth: '100%', marginBottom: '2rem', opacity: 0.25 }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  )
}
