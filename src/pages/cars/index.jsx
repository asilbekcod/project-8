import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import rasm from "../../imgs/header-bg.jpg.webp"
import { BsArrowRight } from "react-icons/bs";
import Exportlar from '../home/exp';
import What from '../home/what';
import Choos from '../choos';

function Cars() {
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
                        Cars
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
                                Cars
                            </Link>
                        </Box>
                    </Typography>
                </Box>
            </Box>
            <Choos/>
            <Exportlar/>
            <What/>
        </Box>
    )
}

export default Cars