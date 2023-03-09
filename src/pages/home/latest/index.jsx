import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import raska from "../../../imgs/b1.jpg.webp"
import { Gaplar } from '../map';
function Latest() {
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ mb: "50px", width: "650px" }}>
                    <Typography sx={{
                        fontSize: "36px",
                        m: "0 0 0px",
                        color: "#222222",
                        fontWeight: "500",
                        textAlign: "center"
                    }}>Latest From Our Blog</Typography>
                    <Typography sx={{
                        color: "#777777",
                        fontSize: "14px",
                        lineHeight: "1.625em",
                        fontFamily: '"Poppins", sans-serif',
                        textAlign: "center   ",
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                p: "40px 0"
            }}>
                <Container>
                    <Grid container spacing={2}>
                        {Gaplar.map((v) => (

                            <Grid item lg={3} md={3} sm={6} xs={12}>
                                <Box sx={{
                                    transition: "0.2s",
                                    "&:hover": {
                                        color: "#fab700  "
                                    },
                                    mb:"30px"
                                }}>

                                    <Box>
                                        <img src={v.rasm} alt="" style={{ width: "100%", height: "100%" }} />
                                    </Box>
                                    <Box sx={{
                                        width: "150px",
                                        height: "30px",
                                        background: "black",
                                        color: "white",
                                        textAlign: "center",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mt: "15px"
                                    }}>
                                        <Typography>
                                            10 Jan 2023
                                        </Typography>
                                    </Box>
                                    <Box sx={{

                                    }}>
                                        <Typography sx={{
                                            fontSize: "18px",
                                            // color: "#222222",
                                            m: "0 0 12px",
                                            fontWeight: "600",
                                            lineHeight: "1.2em",
                                            mt: "15px",
                                            cursor: "pointer"

                                        }}>
                                            Addiction When Gambling Becomes A Problem
                                        </Typography>
                                    </Box>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        m: "0 0 14px",
                                        color: "#777777",
                                        lineHeight: "1.625em"
                                    }}>
                                        inappropriate behavior ipsum dolor sit amet, consectetur.
                                    </Typography>
                                    <Box sx={{
                                        display: "flex", justifyContent: "space-between",
                                        color: "#777777",
                                        fontSize: "14px"
                                    }}>
                                        <Typography>
                                            <AiOutlineHeart /> 15 Likes
                                        </Typography>
                                        <Typography>
                                            <HiOutlineChatBubbleOvalLeft /> 02 Comments
                                        </Typography>
                                    </Box>


                                </Box>
                            </Grid>

                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box >
    )
}

export default Latest