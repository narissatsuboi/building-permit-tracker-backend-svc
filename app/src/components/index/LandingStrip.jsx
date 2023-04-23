import * as React from 'react'
import { Container } from '@mui/material'
import { Button } from '@mui/material'
import { Card, CardMedia, CardContent, CardActions } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import excavImg from '../../assets/excavator.jpg'

export default function LandingStrip() {
  return (
    <div style={{ backgroundImage: `url(${excavImg})`, backgroundRepeat:'no-repeat',
                  backgroundSize:'contain', 
                  height: 550,
                }}>
    </div>
  );
}
