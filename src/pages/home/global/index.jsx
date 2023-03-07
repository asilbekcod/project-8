import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import rasm from "../../../imgs/about-img.jpg.webp"
function Global() {
    return (
        <Box sx={{p:"0px 0"}}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box>
                            <img src={rasm} alt="" style={{ width: "100%", height: "auto" }} />
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ display: "flex", alignItems: "center", width:"100%", height:"100%" }}>
                            <Box sx={{ pr: "5%", pl: "4%" }}>
                                <Typography sx={{ fontSize: "36px", m: "0 0 20px", fontWeight: "600", color: "#222222  ", lineHeight: "1.2em    ", }}>
                                    Globally Connected <br />
                                    by Large Network
                                </Typography>
                                <Typography sx={{
                                    fontSize: "16px ",
                                    color: "#222222"
                                }}>
                                    We are here to listen from you deliver exellence
                                </Typography>
                                <Typography sx={{
                                    fontSize: "16px",
                                    color: "#777777",
                                    mt: "15px",
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                                </Typography>

                                <Box sx={{
                                    mt: "40px"
                                }}>
                                    <Link href='#' sx={{
                                        width: "220px",
                                        height: "45px",
                                        background: "#fab700",
                                        p: "15px 30px",
                                        textDecoration: "none",
                                        textTransform: "uppercase",
                                        fontWeight: "500",
                                        cursor: "pointer",
                                        color: "white",
                                        transition:"0.2s",
                                        "&:hover":{
                                            background:"white",
                                            border:"1px solid #fab700",
                                            color:"#fab700"
                                        }
                                    }}>
                                        <span>
                                            GET DETAILS
                                        </span>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Box>

    )
}

export default Global