import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';
import { Datat } from '../map';
function Some() {
    const [value, setValue] = React.useState(3);
    return (
        <Box sx={{ p: "60px 0" }}>
            <Container>


                <Box sx={{ mb: "50px" }}>
                    <Typography sx={{
                        fontSize: "36px",
                        m: "0 0 0px",
                        color: "#222222",
                        fontWeight: "500",
                        textAlign: "center"
                    }}>Some Features that Made us Unique</Typography>
                    <Typography sx={{
                        color: "#777777",
                        fontSize: "14px",
                        lineHeight: "1.625em",
                        fontFamily: '"Poppins", sans-serif',
                        textAlign: "center   "
                    }}>
                        Who are in extremely love with eco friendly system.
                    </Typography>
                </Box>
            </Container>
            <Box>
                <Container>
                    <Grid container spacing={2}>
                        {Datat.map((v, i) => (

                            <Grid key={i} item lg={4} md={4} sm={6} xs={12}>
                                <Box sx={{
                                    width: "100%",
                                    height: "auto",
                                    background: "red",
                                    borderRadius: "10px",
                                    backgroundColor: "#f9f9ff",
                                    p: "30px",
                                    mb: "30px",
                                    transition: "0.2s",
                                    cursor: "pointer",
                                    "&:hover": {
                                        transition: "0.2s",
                                        boxShadow: "0px 20px 30px 0px rgb(35 94 231 / 20%)"
                                    },

                                }}>
                                    <Typography sx={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        textAlign: "center"
                                    }}>
                                        {v.name}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        m: "20px 0",
                                        textAlign: "center",
                                        p: "0 30px",
                                        color: "#777777"
                                    }}>
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker
                                    </Typography>
                                    <Typography sx={{ textAlign: "center", }}>
                                        <Rating name="read-only" value={value} readOnly sx={{ fontSize: "20px" }} />
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}


                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default Some