import * as React from 'react'
import excavImg from '../../assets/excavator.jpg'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'


export default function ExcavatorBanner() {
  return (
    // <Box display="flex" alignItems="center" justifyContent="center">
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <Box sx={{ // display, align,justify are for the children of this Box, not the Box itself
                    display: 'flex',
                    alignItems: 'end', // aligns the text
                    justifyContent: 'center',
                    position: 'relative',
                    backgroundImage:`url(${excavImg})`, backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    height: 475, width: 350, maxWidth: 450,
                  }}>
        <Typography variant="h5" sx={{position: 'relative', bottom:'50px', left:'75px', color:'black', fontWeight:800}}>
          Dig efficiency?
        </Typography>
      </Box>
    </Box>
  );
}


