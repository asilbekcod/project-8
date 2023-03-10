import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import rasm from "../../imgs/header-bg.jpg.webp"
import { BsArrowRight } from "react-icons/bs";
import { daekom, Fara, Fara1, farmon, farmon1, Index } from '../home/map';
import darka from "../../imgs/49.png"

import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import rasmlar from "../../imgs/99.png"
function Blog2() {
    return (
        <Box sx={{
        }}>

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
                        Blog Single
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
                                Blog Single
                            </Link>
                        </Box>
                    </Typography>
                </Box>
            </Box>

            <Container>



                <Box>
                    <Grid container spacing={2}>
                        <Grid item lg={8} md={8} sm={12} xs={12}>
                            <Box>
                                {Fara1.map((v) => (
                                    <Container>
                                        <Box sx={{ width: "100%", mb: "15px  " , p:"120px 0"}}>
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
                                            <Typography sx={{
                                                mt: "20px",
                                                fontSize: "14px",
                                                lineHeight: "1.625em",
                                                color: "#777777",
                                            }}>
                                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed MCSE training.
                                            </Typography>
                                            <Box sx={{
                                                borderLeft: "2px solid #fab700",
                                                p: "30px 50px 30px 30px",
                                                background: "#f9f9ff",
                                                mt: "25px"
                                            }}>
                                                <Typography sx={{
                                                    fontSize: "14px"
                                                }}>

                                                    “Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government.banking
                                                </Typography>
                                            </Box>
                                            <Typography sx={{
                                                mt: "20px",
                                                fontSize: "14px",
                                                lineHeight: "1.625em",
                                                color: "#777777",
                                            }}>
                                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed MCSE training.
                                            </Typography>
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

                                            <Box sx={{
                                                borderBottom: "1px solid #eee",
                                                p: "50px 0 100px"
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                                        <Box>
                                                            <Box >
                                                                <Box sx={{
                                                                    width: "100%",
                                                                    display: "flex"
                                                                }}>
                                                                    <img src={rasmlar} alt="" style={{ width: "62px" }} />
                                                                    <Box sx={{
                                                                        p: "5px 0 0 15px "
                                                                    }}>
                                                                        <Typography sx={{
                                                                            fontSize: "14px",
                                                                            color: "#777"
                                                                        }}>Prev Post</Typography>
                                                                        <Typography sx={{
                                                                            mt: "10px",
                                                                            color: "#222",
                                                                            fontWeight: "600"
                                                                        }}>
                                                                            A DISCOUNT TONER
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item lg={6} md={6} sm={6} xs={12} sx={{
                                                        display: "flex",
                                                        justifyContent: "right"
                                                    }}>
                                                        <Box >
                                                            <Box sx={{
                                                                width: "100%",
                                                                display: "flex",
                                                            }}>
                                                                <Box sx={{
                                                                    p: "5px 15px 0 0px "
                                                                }}>
                                                                    <Typography sx={{
                                                                        fontSize: "14px",
                                                                        color: "#777",
                                                                        textAlign: "right"
                                                                    }}>Prev Post</Typography>
                                                                    <Typography sx={{
                                                                        mt: "10px",
                                                                        color: "#222",
                                                                        fontWeight: "600"
                                                                    }}>
                                                                        A DISCOUNT TONER
                                                                    </Typography>
                                                                </Box>
                                                                <img src={rasmlar} alt="" style={{ width: "62px" }} />
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>

                                            </Box>

                                            <Typography sx={{
                                                mb: "80px",
                                                textTransform: "uppercase",
                                                fontWeight: "600",
                                                fontSize: "16px",
                                                pt: "50px"
                                            }}>
                                                05 COMMENTS
                                            </Typography>
                                            {Index.map((v) => (
                                                <Box sx={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                }}>
                                                    <Box sx={{
                                                        display: "flex",
                                                        m: "20px 0 ",
                                                        ml: (v.mb)
                                                    }}>
                                                        <img src={rasmlar} alt="" style={{ width: "62px", height: "62px" }} />
                                                        <Box sx={{
                                                            p: "0px 0 0 15px"
                                                        }}>
                                                            <Typography sx={{
                                                                color: "#222",
                                                                fontSize: "16px",
                                                                fontWeight: "600"
                                                            }}>Emilly Blunt</Typography>
                                                            <Typography sx={{
                                                                fontSize: "13px ",
                                                                color: "#ccc",
                                                                mb: "16px"
                                                            }}>December 4, 2017 at 3:12 pm</Typography>

                                                            <Typography
                                                                sx={{
                                                                    fontSize: "14px",
                                                                    color: "#777"
                                                                }}>
                                                                Never say goodbye till the end comes!
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{
                                                            width: "100px",
                                                            height: "40px",
                                                            background: "black",
                                                            color: "white",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            cursor: "pointer",
                                                            transition: "0.2s",
                                                            "&:hover": {
                                                                border: "1px solid black",
                                                                color: "black",
                                                                background: "white"
                                                            }
                                                        }}>
                                                            REPLY
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            ))}
                                            <Typography sx={{
                                                mb: "80px",
                                                // textTransform: "uppercase",
                                                fontWeight: "600",
                                                fontSize: "16px",
                                                pt: "50px"
                                            }}>
                                                Leave a Reply
                                            </Typography>
                                            <Box>
                                                <Box>
                                                    <Grid container spacing={2}>
                                                        <Grid item lg={4} md={4} sm={6 } xs={12}>
                                                            <Box>
                                                                <input type="text" style={{ width: "100%", height: "35px", background: "#f9f9ff", border: "none", marginBottom: "15px", padding: "15px" }} placeholder='Enter your name' />
                                                                <input type="text" style={{ width: "100%", height: "35px", background: "#f9f9ff", border: "none", marginBottom: "15px", padding: "15px" }} placeholder='Enter your email' />
                                                                <input type="text" style={{ width: "100%", height: "35px", background: "#f9f9ff", border: "none", marginBottom: "15px", padding: "15px" }} placeholder='Subject' />

                                                            </Box>
                                                        </Grid>
                                                        <Grid item lg={8} md={8} sm={6 } xs={12}>
                                                            <Box>
                                                                <textarea name="" id=""  style={{ width: "100%", height: "130px  ", background: "#f9f9ff", border: "none", marginBottom: "15px", padding: "15px" }} placeholder='Enter your name'></textarea>
                                                            </Box>
                                                            <Typography sx={{
                                                                width: "160px",
                                                                height: "40px",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                background: "#fab700 ",
                                                                color: "white",
                                                                textTransform:"uppercase",
                                                                fontSize:"14px",
                                                                fontWeight:"600"
                                                            }}>
                                                                Coment
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Container>
                                ))}
                            </Box>

                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Box sx={{
                                p:"120px 0"
                            }}>
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
                </Box>
            </Container>

        </Box>
    )
}

export default Blog2