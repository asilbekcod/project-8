import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { CiUser } from "react-icons/ci";
import { Whatta } from '../map';
function What() {
    return (
        <Box sx={{ p: "60px 0" }}>
            <Container>

                <Box sx={{ mb: "50px" }}>
                    <Typography sx={{
                        fontSize: "36px",
                        m: "0 0 20px",
                        color: "#222222",
                        fontWeight: "500",
                        textAlign: "center"
                    }}>What Services we offer to our clients</Typography>
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
                        {Whatta.map((v, i) => (
                            <Grid item lg={4} md={4} sm={6} xs={12} key={i}>
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
                                        color: "#fab700",
                                        transition: "0.2s",
                                        boxShadow: "-14.142px 14.142px 20px 0px rgb(157 157 157 / 50%)"
                                    }
                                }}>
                                    <Typography sx={{
                                        m: "20px 0",
                                        fontSize: "19px",
                                        fontWeight: "600",
                                        fontFamily: '"Poppins", sans-serif',
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                        <span style={{ fontSize: "25px", marginRight: "10px" }}>
                                            {v.icons}
                                        </span>  {v.name}
                                    </Typography>

                                    <Typography sx={{
                                        m: "0 0 16px",
                                        fontSize: "16px",
                                        color: "#777"
                                    }}>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
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

export default What