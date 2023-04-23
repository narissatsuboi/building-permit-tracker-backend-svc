import React, { useEffect } from "react";
import Billboard from './components/index/Billboard.jsx'
import Grid from '@mui/material/Unstable_Grid2'
import { Container, Box, Typography } from '@mui/material'
import { Card } from '@mui/material'
import { Image } from 'mui-image'
import ExcavatorBanner from './components/index/ExcavatorBanner.jsx'

export default function LandingPage() {

    return(
        <Box disableGutters>
            <ExcavatorBanner></ExcavatorBanner>
       </Box>
   )
}

