import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Carousel from "react-elastic-carousel";
import "./style.css"
import rasm from '../../imgs/car.jpg.webp'
function Choos() {
    const breakPoints = [
        { width: 100, itemsToShow: 1, showArrows: false },
        { width: 550, itemsToShow: 1, showArrows: false },
        { width: 768, itemsToShow: 1, showArrows: false },
        { width: 1200, itemsToShow: 1, showArrows: false },
    ];

    return (
        <Box sx={{
            p:"60px 0"
        }}>


            <Container>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ mb: "50px", width: "650px" }}>
                        <Typography sx={{
                            fontSize: "36px",
                            m: "0 0 0px",
                            color: "#222222",
                            fontWeight: "500",
                            textAlign: "center"
                        }}>Choose your Desired Car Model</Typography>
                        <Typography sx={{
                            color: "#777777",
                            fontSize: "14px",
                            lineHeight: "1.625em",
                            fontFamily: '"Poppins", sans-serif',
                            textAlign: "center   ",
                        }}>
                            Who are in extremely love with eco friendly system.
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Carousel breakPoints={breakPoints} >
                <Container>

                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        // background: "red"
                    }}>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box sx={{
                                    width: "100%"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}>
                                        <Typography sx={{
                                            fontSize: "18px",
                                            color: "#222",
                                            fontWeight: "600"
                                        }}>
                                            Audi 3000 msi
                                        </Typography>
                                        <Typography sx={{
                                            color: "#fab700",
                                            fontSize: "36px",
                                            mr: "7%",
                                            fontWeight: "600"
                                        }}>
                                            $149<span style={{ fontSize: "20px" }}>/day</span>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ fontSize: "14px", color: "#777", }}>
                                        <Typography sx={{ lineHeight: "1.625em", mt: "15px" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Typography>
                                        <Typography sx={{ mt: "30px" }}>
                                            Capacity : 04 Person
                                        </Typography>
                                        <Typography>
                                            Doors : 04
                                        </Typography>
                                        <Typography>
                                            Air Condition : Dual Zone
                                        </Typography>
                                        <Typography>
                                            Transmission : Automatic
                                        </Typography>
                                    </Box>
                                    <Typography sx={{
                                        textTransform: "uppercase",
                                        border: "1px solid grey",
                                        width: "210px",
                                        p: "10px 15px",
                                        background: "#222",
                                        color: "white",
                                        fontSize: "14px",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        "&:hover": {
                                            // border:"#fab700",
                                            color: "#fab700"
                                        },
                                        transition: "0.2s",
                                        mt: "25px"
                                    }}>
                                        Book this  car now
                                    </Typography>

                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box>
                                    <img src={rasm} style={{ width: "100%" }} alt="" />
                                </Box>
                            </Grid>
                        </Grid>


                    </Box>

                </Container>
                <Container>

                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        // background: "red"
                    }}>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box sx={{
                                    width: "100%"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}>
                                        <Typography sx={{
                                            fontSize: "18px",
                                            color: "#222",
                                            fontWeight: "600"
                                        }}>
                                            Audi 3000 msi
                                        </Typography>
                                        <Typography sx={{
                                            color: "#fab700",
                                            fontSize: "36px",
                                            mr: "7%",
                                            fontWeight: "600"

                                        }}>
                                            $149<span style={{ fontSize: "20px" }}>/day</span>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ fontSize: "14px", color: "#777", }}>
                                        <Typography sx={{ lineHeight: "1.625em", mt: "15px" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Typography>
                                        <Typography sx={{ mt: "30px" }}>
                                            Capacity : 04 Person
                                        </Typography>
                                        <Typography>
                                            Doors : 04
                                        </Typography>
                                        <Typography>
                                            Air Condition : Dual Zone
                                        </Typography>
                                        <Typography>
                                            Transmission : Automatic
                                        </Typography>
                                    </Box>
                                    <Typography sx={{
                                        textTransform: "uppercase",
                                        border: "1px solid grey",
                                        width: "210px",
                                        p: "10px 15px",
                                        background: "#222",
                                        color: "white",
                                        fontSize: "14px",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        "&:hover": {
                                            // border:"#fab700",
                                            color: "#fab700"
                                        },
                                        transition: "0.2s",
                                        mt: "25px"
                                    }}>
                                        Book this  car now
                                    </Typography>

                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box>
                                    <img src={rasm} style={{ width: "100%" }} alt="" />
                                </Box>
                            </Grid>
                        </Grid>


                    </Box>

                </Container>
                <Container>

                    <Box sx={{
                        width: "100%",
                        height: "450px",
                        // background: "red"
                    }}>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box sx={{
                                    width: "100%"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}>
                                        <Typography sx={{
                                            fontSize: "18px",
                                            color: "#222",
                                            fontWeight: "600"
                                        }}>
                                            Audi 3000 msi
                                        </Typography>
                                        <Typography sx={{
                                            color: "#fab700",
                                            fontSize: "36px",
                                            mr: "7%",
                                            fontWeight: "600"

                                        }}>
                                            $149<span style={{ fontSize: "20px" }}>/day</span>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ fontSize: "14px", color: "#777", }}>
                                        <Typography sx={{ lineHeight: "1.625em", mt: "15px" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Typography>
                                        <Typography sx={{ mt: "30px" }}>
                                            Capacity : 04 Person
                                        </Typography>
                                        <Typography>
                                            Doors : 04
                                        </Typography>
                                        <Typography>
                                            Air Condition : Dual Zone
                                        </Typography>
                                        <Typography>
                                            Transmission : Automatic
                                        </Typography>
                                    </Box>
                                    <Typography sx={{
                                        textTransform: "uppercase",
                                        border: "1px solid grey",
                                        width: "210px",
                                        p: "10px 15px",
                                        background: "#222",
                                        color: "white",
                                        fontSize: "14px",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        "&:hover": {
                                            // border:"#fab700",
                                            color: "#fab700"
                                        },
                                        transition: "0.2s",
                                        mt: "25px"
                                    }}>
                                        Book this  car now
                                    </Typography>

                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box>
                                    <img src={rasm} style={{ width: "100%" }} alt="" />
                                </Box>
                            </Grid>
                        </Grid>


                    </Box>

                </Container>
            </Carousel>
        </Box>
    )
}

export default Choos