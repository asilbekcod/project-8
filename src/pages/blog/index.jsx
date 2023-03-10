import React from 'react'
import rasm from "../../imgs/header-bg.jpg.webp"
import darka from "../../imgs/49.png"
import darkaa from "../../imgs/50.png"
import { BsArrowRight } from "react-icons/bs";
import "./style.css"
import { Box, Container, Grid, Link, Typography } from '@mui/material';

import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { daekom, Fara, farmon, farmon1 } from '../home/map';
function Blog() {
    return (
        <Box>
            <Box sx={{ position: 'relative' }}>
                <Box sx={{
                    position: "absolute",
                    width: "100%"
                }}>
                    <img src={rasm} alt="" style={{
                        width: '100%',
                        height: "350px",
                        backgroundSize: 'cover   ',
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
                        Blog
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
                                Blog
                            </Link>
                        </Box>
                    </Typography>
                </Box>
            </Box>
            <Container sx={{
                p: "50px 0"
            }}>
                <Grid container spacing={2}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        {Fara.map((v) => (
                            <Container>
                                <Box sx={{ width: "100%", mb: "15px  " }}>
                                    <Box>
                                        <img src={v.rasm} alt="" style={{ width: "100%" }} />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            p: "30px 0"
                                        }}>
                                        Art, Technology, Fashion
                                    </Typography>
                                    <Link id="sal1" href='#'>
                                        Cartridge Is Better Than Ever A <br /> Discount Toner
                                    </Link>
                                    <Typography sx={{
                                        mt: "20px",
                                        fontSize: "14px",
                                        lineHeight: "1.625em",
                                        color: "#777777",
                                    }}>
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed MCSE training.
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <Box sx={{
                                                color: "#777777",
                                                display: "flex",
                                                mt: "15px"
                                            }}>
                                                <Typography sx={{
                                                    fontSize: "14px",
                                                    display: "flex",
                                                    alignItems: "center"
                                                }}>
                                                    <AiOutlineHeart style={{ margin: "0  5px 0 0" }} /> 4 likes
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: "14px",
                                                    ml: "15px",
                                                    display: "flex",
                                                    alignItems: "center"
                                                }}>
                                                    <HiOutlineChatBubbleOvalLeft style={{ margin: "0 5px 0 0px" }} /> 06 Comments
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <Box sx={{
                                                color: "#777777",
                                                mt: { lg: "15px", md: "15px", sm: "0px", xs: "0px" }
                                            }}>
                                                <Box sx={{
                                                    display: "flex",
                                                    justifyContent: { lg: "right", md: "right", sm: "start", xs: "start" }
                                                }}>
                                                    <GrFacebookOption style={{ fontSize: "18px", margin: " 0 0 0 0px" }} />
                                                    <AiOutlineTwitter style={{ fontSize: "20px", margin: " 0 0 0 10px" }} />
                                                    <AiOutlineDribbble style={{ fontSize: "20px", margin: " 0 0 0 10px" }} />
                                                    <AiOutlineBehance style={{ fontSize: "22px", margin: " 0 10px 0 10px" }} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Container>
                        ))}
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Box>
                            <Box sx={{
                                width: "100%",
                                border: "1px solid #eee   ",
                                p: "40px 30px",
                                mb: "30px",
                            }}>
                                <Box sx={{
                                    width: "100%",
                                    height: "42px",
                                    border: "1px solid #eee   ",
                                    display: "flex"


                                }}>
                                    <input type="text" style={{ width: "80%", height: "100%", padding: "10px", background: "#eee", border: "none" }} placeholder="Search Posts" />
                                    <Link href="#" sx={{
                                        width: "20%",
                                        height: "100%",
                                        background: "#eee",
                                        fontSize: "22px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "#fab700",
                                        cursor: "pointer "
                                    }}>
                                        <BiSearch />
                                    </Link>
                                </Box>
                            </Box>
                            <Box sx={{
                                width: "100%",
                                border: "1px solid #eee   ",
                                p: "40px 30px",
                                mb: "30px",
                                textAlign: "center"
                            }}>
                                <img src={darka} alt="" />
                                <Typography sx={{
                                    p: "20px 0",
                                    fontSize: "18px",
                                    fontWeight: "600"
                                }}>
                                    Adele Gonzalez
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "#777777", lineHeight: "1.625em" }}>
                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get.
                                </Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center", mt: "20px",
                                    alignItems: "center"
                                }}>
                                    <GrFacebookOption style={{ fontSize: "18px", margin: " 0 0 0 0px", cursor: "pointer" }} />
                                    <AiOutlineTwitter style={{ fontSize: "20px", margin: " 0 0 0 20px", cursor: "pointer" }} />
                                    <AiOutlineDribbble style={{ fontSize: "20px", margin: " 0 0 0 20px", cursor: "pointer" }} />
                                    <AiOutlineBehance style={{ fontSize: "24px", margin: " 0 10px 0 20px", cursor: "pointer" }} />
                                </Box>
                            </Box>
                            <Box sx={{
                                width: "100%",
                                border: "1px solid #eee   ",
                                p: "40px 30px",
                                mb: "30px",

                            }}>
                                <Typography sx={{
                                    fontSize: "18px",
                                    color: "#222222",
                                    fontWeight: "600",
                                    mb: "25px"
                                }}>
                                    Post Categories
                                </Typography>
                                {farmon.map((v) => (

                                    <Box sx={{
                                        borderBottom: " 1px solid #eee",
                                        p: "10px 20px",
                                        "&:hover": {
                                            color: "#fab700",
                                            borderColor: "#fab700"
                                        },
                                        display: "flex",
                                        justifyContent: "space-between",
                                        fontSize: "14px",
                                        transition: "0.2s",
                                        cursor: "pointer",
                                        color: "#777"

                                    }}>
                                        <Typography>
                                            {v.name}
                                        </Typography>
                                        <Typography>
                                            {v.number}
                                        </Typography>
                                    </Box>
                                ))}

                            </Box>
                            <Box sx={{
                                width: "100%",
                                border: "1px solid #eee   ",
                                p: "40px 30px",
                                mb: "30px",
                            }}>
                                <Typography sx={{
                                    fontSize: "18px",
                                    color: "#222222",
                                    fontWeight: "600",
                                    mb: "25px"
                                }}>
                                    Recent Posts
                                </Typography>

                                <Box sx={{
                                    width: "100%",
                                    display: "flex"
                                }}>

                                    <Grid container spacing={2}>
                                        {daekom.map((v) => (
                                            <Box sx={{ display: "flex" }}>

                                                <Grid item xs={3}>
                                                    <Box sx={{ p: "5px" }}>
                                                        <img src={v.rasm} alt="" style={{ width: '100%' }} />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={8.5}>
                                                    <Box sx={{
                                                        p: "5px 10px"
                                                    }}>
                                                        <Typography sx={{
                                                            fontSize: "14px",
                                                            fontWeight: "600",
                                                            cursor: "pointer",
                                                            "&:hover": {
                                                                color: "#fab700"
                                                            },
                                                            transition: "0.2s"
                                                        }}>
                                                            Home Audio Recording For Everyone
                                                        </Typography>
                                                        <Typography sx={{
                                                            mt: "10px",
                                                            color: "#777",
                                                            fontSize: "14px",

                                                        }}>
                                                            02 hours ago
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            </Box>
                                        ))}
                                    </Grid>

                                </Box>
                            </Box>

                            <Box sx={{
                                width: "100%",
                                border: "1px solid #eee   ",
                                p: "40px 30px",
                                mb: "30px",

                            }}>
                                <Typography sx={{
                                    fontSize: "18px",
                                    color: "#222222",
                                    fontWeight: "600",
                                    mb: "25px"
                                }}>
                                    Post Archive
                                </Typography>
                                {farmon1.map((v) => (

                                    <Box sx={{
                                        borderBottom: " 1px solid #eee",
                                        p: "10px 20px",
                                        "&:hover": {
                                            color: "#fab700",
                                            borderColor: "#fab700"
                                        },
                                        display: "flex",
                                        justifyContent: "space-between",
                                        fontSize: "14px",
                                        transition: "0.2s",
                                        cursor: "pointer",
                                        color: "#777"
                                    }}>
                                        <Typography>
                                            {v.name}
                                        </Typography>
                                        <Typography>
                                            {v.number}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{
                                width: "100%",
                                border: "1px solid #eee   ",
                                p: "40px 30px",
                                mb: "30px",
                            }}>
                                <Typography sx={{
                                    fontSize: "18px",
                                    color: "#222222",
                                    fontWeight: "600",
                                    mb: "25px"
                                }}>
                                    Tag Clouds
                                </Typography>

                                <Typography sx={{
                                    p: "8px 10px",
                                    mb: "8px",
                                    border: "1px solid #eee",
                                    "&:hover": {
                                        background: "#fab700",
                                        color: "white"
                                    },
                                    cursor: "pointer",
                                    transition: "0.2s",
                                    fontSize: "14px"
                                }}>
                                    Lifestyle
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Blog