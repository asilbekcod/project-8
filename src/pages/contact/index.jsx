import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import rasm from "../../imgs/header-bg.jpg.webp"
import { BsArrowRight } from "react-icons/bs";
import { SlHome } from "react-icons/sl";
import { Conat } from '../home/map';
function Contact() {
    return (
        <Box sx={{
            background: "#f9f9ff"
        }}>
            <Box>
                <Box sx={{
                    position: "absolute",
                    width: "100%"
                }}>
                    <img src={rasm} alt="" style={{
                        width: '100%',
                        height: "450px",


                    }} />
                </Box>
                <Box sx={{
                    background: "rgba(0, 0, 0, 0.8)",
                    width: "100%",
                    height: "450px",
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
                        Contact Us
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
                                Contact Us
                            </Link>
                        </Box>
                    </Typography>
                </Box>
            </Box>
            <Container>
                <Box sx={{ p: "80px 0" }}>

                    <Box sx={{
                        width: "100%",
                        height: "445px",
                    }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47955.529859584916!2d69.26172159999999!3d41.304064000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1665154251123!5m2!1sru!2s"
                            width="100%" height="470" style={{ border: 0 }} allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </Box>
                </Box>
            </Container>
            <Box>
                <Container>

                    <Box sx={{ width: "100%", p: "40px 0" }}>


                        <Grid container spacing={2}>
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                {Conat.map((v) => (
                                    <Grid container spacing={2} sx={{ mb: "15px" }}>
                                        <Grid item lg={2} md={2} sm={1}  >
                                            <Grid sx={{
                                                width: "100%",
                                                height: "auto",
                                                display: "flex",

                                            }}>
                                                <Box sx={{
                                                    width: "17%",
                                                    height: "100%",
                                                    // background: "blue",
                                                    fontSize: "28px",
                                                    color: "#fab700"
                                                }}>
                                                    {v.icon}
                                                </Box>

                                            </Grid  >
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Box sx={{
                                                width: "80%",
                                                height: "100%",
                                            }}>
                                                <Typography sx={{
                                                    fontSize: "16px",
                                                    m: " 0 0 5px",
                                                    color: "#222222"
                                                }}>
                                                    {v.name}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: "14px",
                                                    m: " 0 0 5px",
                                                    color: "#777777"
                                                }}>
                                                    {v.text}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item lg={8} md={8} sm={12} xs={12}>

                                <Grid container spacing={4}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <Grid container spacing={2}>
                                            {Conat.map((v) => (
                                                <Grid item xs={12}>
                                                    <Box>
                                                        <input type="text" style={{ width: "100%", height: "50px", padding: "10px", outline: "none" }} placeholder={v.pla} />
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <Box>
                                            <textarea name="" id="" style={{ width: "100%", height: "182px" }} ></textarea>
                                            <Box sx={{
                                                display: "flex",
                                                justifyContent: "right"
                                            }}>
                                                <Box sx={{
                                                    width: "230px",
                                                    height: "50px",
                                                    background: "#fab700",
                                                    p: "0 40px",
                                                    lineHeight: "42px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    fontSize: "14px  ",
                                                    color: "white",
                                                    fontWeight: "600",
                                                    mt: "15px"

                                                }}>
                                                    <Typography>
                                                        SEND MESSAGE
                                                    </Typography>
                                                </Box>
                                            </Box>


                                        </Box>
                                    </Grid>

                                </Grid>

                            </Grid>

                        </Grid>
                    </Box>

                </Container>
            </Box >

        </Box >
    )
}

export default Contact