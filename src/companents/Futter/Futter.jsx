import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import './Futter.css';

function Futter() {
    return (
        <Box id='futter'>
            <Box sx={{
                padding: '100px 0 120px 0',
                background: '#04091e'
            }}>
                <Box>
                    <Container>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={2} lg={2} xl={2} sx={{ padding: '0 15px' }}>
                                <Box id='futyoz10'>
                                    <Typography id='futyoz1'>
                                        Quick links
                                    </Typography>
                                    <Link href='#' id='futyoz2'>
                                        Jobs
                                    </Link>
                                    <Link href='#' id='futyoz2'>
                                        Brand Assets
                                    </Link>
                                    <Link href='#' id='futyoz2'>
                                        Investor Relations
                                    </Link>
                                    <Link href='#' id='futyoz2'>
                                        Terms of Service
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} lg={2} xl={2} sx={{ padding: '0 15px' }}>
                                <Box id='futyoz10'>
                                    <Typography id='futyoz1'>
                                        Features
                                    </Typography>
                                    <Link href='#' id='futyoz2'>
                                        Jobs
                                    </Link>
                                    <Link href='#' id='futyoz2'>
                                        Brand Assets
                                    </Link>
                                    <Link href='#' id='futyoz2'>
                                        Investor Relations
                                    </Link>
                                    <Link href='#' id='futyoz2'>
                                        Terms of Service
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} lg={2} xl={2} sx={{ padding: '0 15px' }}>
                                <Box id='futyoz10'>
                                    <Typography id='futyoz1'>
                                        Resources
                                    </Typography>
                                    <Link href='#' id='futyoz2'>
                                        Jobs
                                    </Link>
                                    <Link href='#' id='futyoz2'>
                                        Brand Assets
                                    </Link>
                                    <Link href='#' id='futyoz2'>
                                        Investor Relations
                                    </Link>
                                    <Link href='#' id='futyoz2'>
                                        Terms of Service
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} lg={2} xl={2} sx={{ padding: '0 15px' }}>
                                <Box id='futyoz10'>
                                    <Typography id='futyoz1'>
                                        Follow Us
                                    </Typography>
                                    <Link href='#' id='futyoz3'>
                                        Let us be social
                                    </Link>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Link href='#' id='futyoz4'>
                                            <FaFacebookF />
                                        </Link>
                                        <Link href='#' id='futyoz4'>
                                            <FaTwitter />
                                        </Link>
                                        <Link href='#' id='futyoz4'>
                                            <FaDribbble />
                                        </Link>
                                        <Link href='#' id='futyoz5'>
                                            <FaBehance />
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} sx={{ padding: '0 15px' }}>
                                <Box id='futyoz10'>
                                    <Typography id='futyoz1'>
                                        Newsletter
                                    </Typography>
                                    <Link href='#' id='futyoz3'>
                                        Stay update with our latest
                                    </Link>
                                    <Box id='futyoz6'>
                                        <input type="text" placeholder='Enter Email' id='futyoz7' />
                                        <Link id='futyoz8'>
                                            <BsArrowRight />
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Box>
                        <Typography id='futyoz9'>
                            Copyright ©2023 All rights reserved | This template is made with
                            <span>
                                <AiOutlineHeart style={{
                                    color: '#fab700',
                                    fontSize: '18px',
                                    margin: '0 2px',
                                    paddingTop: '5px'
                                }} />
                            </span>
                            by <span style={{ color: '#fab700', marginLeft: '3px', cursor: 'pointer' }}>Colorlib</span>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Futter;