import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import rasm from "../../imgs/header-bg.jpg.webp"
import { BsArrowRight } from "react-icons/bs";
import Exportlar from '../home/exp'
import What from '../home/what'
import rasmla from "../../imgs/t1.jpg.webp"
import { Dattar } from '../home/map'
function Team() {
    return (
        <Box>
            <Box sx={{position:'relative'}}>
                <Box sx={{
                    position: "absolute",
                    width: "100%"
                }}>
                    <img src={rasm} alt="" style={{
                        width: '100%',
                        height: "350px",
                        backgroundSize:'cover   ',
                        objectFit: 'cover'
                    }} />
                </Box>
                <Box sx={{
                    background: "rgba(0, 0, 0, 0.8)",
                    width: "100%",
                    height: "350px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography sx={{
                        color: "white",
                        fontSize: "48px",
                        fontWeight: "600"
                    }}>
                        Team
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Link href='/' sx={{
                                fontSize: "14px",
                                textDecoration: "none",
                                color: "white",
                                cursor: "pointer",
                                mr: "10px",
                                fontWeight: "500"
                            }}>
                                Home
                            </Link>

                            <BsArrowRight style={{ fontSize: "22px", margin: " 0 10px 0 0" }} />
                            <Link href="#" sx={{
                                fontSize: "14px",
                                textDecoration: "none",
                                color: "white",
                                cursor: "pointer",
                                fontWeight: "500"
                            }}>
                                Team
                            </Link>
                        </Box>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                p:"50px 0"
            }}>
                <Box>
                    <Box sx={{ mb: "50px" }}>
                        <Typography sx={{
                            fontSize: "36px",
                            m: "0 0 0px",
                            color: "#222222",
                            fontWeight: "600",
                            textAlign: "center"
                        }}>Experienced Mentor Team</Typography>
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
                </Box>

                <Box >
                    <Container>
                        <Grid container spacing={2}>
                            {Dattar.map((v) => (
                                <Grid item lg={3} md={3} sm={3} xs={12}>
                                    <Box>
                                        <img src={v.rasm} alt="" style={{ width: "100%" }} />
                                    </Box>
                                    <Typography sx={{
                                        fontSize: "18px",
                                        color: "#222",
                                        fontWeight: "600",
                                        textAlign: "center",
                                        mt: "15px"
                                    }}>
                                        {v.name}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        m: "0 0 16px",
                                        textAlign: "center",
                                        color: "#777"
                                    }}>
                                        {v.job}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>

                </Box>

            </Box>
            <Exportlar />
            <What />
        </Box>
    )
}

export default Team