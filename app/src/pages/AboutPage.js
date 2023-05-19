import React from 'react'
import { Box, Typography } from '@mui/material'
import NavBar from '../components/layout/Navbar'
import Image from 'mui-image'
import narsOnDirtImg from '../assets/narsondirt.jpg'


export default function AboutPage ({theme}) {
  return (
    <>
      <NavBar />
      <Box sx={{ display: 'flex', backgroundColor: 'white', height: '100vh', justifyContent: 'center' }}>
        <Box sx={{ width: '40%', backgroundColor: 'white' }}>
          <Box sx={{height: '10%'}}></Box>
          <Typography sx={{ height: '10%', backgroundColor: 'white', fontSize: '32px', fontWeight: 'bold'}}>
            About   
          </Typography>
          <Typography variant='body2'sx={{variant: 'body', height: '35%', width: '75%', backgroundColor: 'white'}}>
            tracki is the personal project of Nars Tsuboi, a computer science grad student and 
            former preconstruction manager in the Greater Seattle Area.
            <br></br>
            <br></br>
            Nars has been interested in the intersection of technology and construction using popular tech like Procore and structionsite 
            during her time as a project engineer for a commercial builder.  
            <br></br>
            <br></br>
            She decided to use her free time to try to make keeping track of construction permitting 
            less tedious. 
            You can learn more about the code behind this project <a href="https://github.com/narissatsuboi/tracki" target="_blank" rel="noreferrer">here</a>. 
          </Typography>
          <Typography variant='body2'sx={{variant: 'body', height: '35%', width: '75%', backgroundColor: 'white'}}>
          </Typography>
        </Box>
        <Box sx={{maxWidth:'35%', height:'85%'}}>
          <Image
            src={narsOnDirtImg}
            alt='Nars standing on spoils'
          />
        </Box>
      </Box>
    </>
  )
}
