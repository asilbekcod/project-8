import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CountUp from 'react-countup';
import { Timer } from '../map';

function Time() {
    return (
        <Box sx={{
            m:"40px 0"
        }}>
            <Box sx={{
                width: "100%",
                height: "330px",
                background: "#fab700",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                p: "0 50px"
            }}>
                <Container>

                    <Grid container spacing={2}>
                        {Timer.map((v, i) => (
                            <Grid item lg={2.4} md={2.4} sm={2.4} xs={6} key={i}>
                                <Box>
                                    <Typography sx={{
                                        fontSize: "48px",
                                        fontWeight: "700"
                                    }}>
                                        <CountUp end={v.end} duration={1} />
                                    </Typography>
                                    <Typography sx={{ mt: "-5px", fontSize: "14px" }}>{v.text}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </Box>
        </Box>
    )
}

export default Time