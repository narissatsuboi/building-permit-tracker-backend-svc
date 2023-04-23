import React, { useEffect } from "react";
import Billboard from '../components/index/Billboard.jsx'
import Grid from '@mui/material/Unstable_Grid2'
import { Container, Box } from '@mui/material'
import { Card } from '@mui/material'
import { Image } from 'mui-image'

export default function Home() {

    return(
        <Box disableGutters>
            {/* <Container disableGutters>
                <Grid 
                    container
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} sx={{textAlign: "center"}}>
                    <Billboard></Billboard>
                </Grid>
                <Grid item xs={2}> </Grid>
            </Grid>
            </Container>
            <Container disableGutters sx={{mt: 4}}>
                <Grid 
                    container
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={12} sx={{textAlign: "center"}}>
                        Clever description of what tracki does here
                    </Grid>
                </Grid>
            </Container> */}
            <Box disableGutters >
                <Image src={require('../assets/excavator.jpg')}/>
            </Box>
       </Box>
   )
}

