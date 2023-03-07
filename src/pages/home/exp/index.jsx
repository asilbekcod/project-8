import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import "./style.css"
import rasm from "../../../imgs/callaction-bg.jpg.webp"
function Exportlar() {
    return (
        <Box  sx={{
            p:"60px 0"
        }}>
            <Box sx={{
                position: "absolute",
                height:"400px"
            }}>
                <img src={rasm} alt="" style={{ width: "100%", height: "100%" }} />
            </Box>
            <Box sx={{ position: "relative", background:"rgba(4, 9, 30, 0.75)" }}>
                <Box sx={{
                    width: "100%",
                    height: "400px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center"

                }}>
                    <Box sx={{ width: "940px",  }}>
                        <Typography sx={{
                            fontSize: "36px",
                            fontWeight: "600",
                            color: "white"
                        }}>
                            Experience Great Support
                        </Typography>
                        <Typography sx={{
                            m: "15px 0",
                            color: "white"
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
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
                                transition: "0.2s",
                                "&:hover": {
                                    background: "none",
                                    border: "1px solid #fab700",
                                    color: "#fab700"
                                }
                            }}>
                                <span>
                                    REACH OUR SUPPORT TEAM
                                </span>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Exportlar