import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { BsArrowRight } from "react-icons/bs";
import ElemenImg1 from '../../assets/Img/d.webp';
import ElemenImgbay1 from '../../assets/Img/f1.webp';
import ElemenImgbay2 from '../../assets/Img/f2.webp';
import ElemenImgbay3 from '../../assets/Img/f3.webp';
import ElemenImgbay4 from '../../assets/Img/f4.webp';
import ElemenImgbay5 from '../../assets/Img/f5.webp';
import ElemenImgbay6 from '../../assets/Img/f6.webp';
import ElemenImgbay7 from '../../assets/Img/f7.webp';
import ElemenImgbay8 from '../../assets/Img/f8.webp';
import rasm from '../../assets/Img/rasm.webp';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import './Elements.css';
import { FiCircle } from "react-icons/fi";
import { FaThumbtack, FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Elm from './Elm';
import Switch from '@mui/material/Switch';
import Elem from './Elem';
import { pink } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#106ba3',
    },
});

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const options = ['City', 'Dhaka', 'Dilli', 'Newyork', 'Islamabad'];


function BpCheckbox(props) {
    return (
        <Checkbox
            sx={{
                '&:hover': { bgcolor: 'transparent' },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}


function Elements() {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
        setOpen((prevOpen) => !prevOpen);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };


    return (
        <Box id='Elements'>
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
                        Elements
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
                                Elements
                            </Link>
                        </Box>
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Container >
                    <Box sx={{
                        background: '#fff',
                        padding: '100px 15px 70px 15px'
                    }}>
                        <Typography id='ElementsYozuv1'>
                            Text Sample
                        </Typography>
                        <Typography id='ElementsYozuv2'>
                            Every avid independent filmmaker has <span style={{ color: '#fab700', fontWeight: 'bolder' }}>Bold</span> about making that Italic interest documentary, or short film to show off their creative prowess. Many have great
                            ideas and want to “wow” the<span style={{
                                color: '#fab700',
                                fontSize: '75%',
                                top: '-0.5em',
                                verticalAlign: 'baseline',
                                position: 'relative'
                            }}>Superscript</span> scene, or video renters with their big project. But once you have the<span style={{
                                color: '#fab700',
                                fontSize: '75%',
                                top: '0.5em',
                                verticalAlign: 'baseline',
                                position: 'relative'
                            }}>Superscript</span> “in the can” (no easy feat), how do you move
                            from a <del style={{ color: '#fab700', fontWeight: 'bolder' }}>Strike</del> through of master DVDs with the <u style={{ color: '#fab700', fontWeight: 'bolder' }}> “Underline” </u> marked hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of shiny new,
                            retail-ready DVDs, with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project replicated. Using
                            a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option to ensure a professional end result, but to help
                            with your DVD replication project, here are 4 easy steps to follow for good DVD replication results:
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Box sx={{
                        borderTop: '1px dotted #eee',
                        padding: '70px 15px'
                    }}>
                        <Typography id='ElementsYozuv3'>
                            Sample Buttons
                        </Typography>
                        <Box>
                            <Box sx={{ boxSizing: 'border-box' }}>
                                <Link href='#' id='ElementsYozuv4'>
                                    Default
                                </Link>
                                <Link href='#' id='ElementsYozuv5'>
                                    Primary
                                </Link>
                                <Link href='#' id='ElementsYozuv6'>
                                    Success
                                </Link>
                                <Link href='#' id='ElementsYozuv7'>
                                    Info
                                </Link>
                                <Link href='#' id='ElementsYozuv8'>
                                    Warning
                                </Link>
                                <Link href='#' id='ElementsYozuv11'>
                                    Danger
                                </Link>
                                <Link href='#' id='ElementsYozuv9'>
                                    Link
                                </Link>
                                <Link href='#' id='ElementsYozuv10'>
                                    Disable
                                </Link>
                            </Box>
                            <Box sx={{ boxSizing: 'border-box', marginTop: '10px' }}>
                                <Link href='#' id='ElementsYozuv12'>
                                    Default
                                </Link>
                                <Link href='#' id='ElementsYozuv13'>
                                    Primary
                                </Link>
                                <Link href='#' id='ElementsYozuv14'>
                                    Success
                                </Link>
                                <Link href='#' id='ElementsYozuv15'>
                                    Info
                                </Link>
                                <Link href='#' id='ElementsYozuv16'>
                                    Warning
                                </Link>
                                <Link href='#' id='ElementsYozuv17'>
                                    Danger
                                </Link>
                                <Link href='#' id='ElementsYozuv18'>
                                    Link
                                </Link>
                                <Link href='#' id='ElementsYozuv19'>
                                    Disable
                                </Link>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ boxSizing: 'border-box', marginTop: '40px' }}>
                                <Link href='#' id='ElementsYozuv4' sx={{ borderRadius: '3px' }}>
                                    Default
                                </Link>
                                <Link href='#' id='ElementsYozuv5' sx={{ borderRadius: '3px' }}>
                                    Primary
                                </Link>
                                <Link href='#' id='ElementsYozuv6' sx={{ borderRadius: '3px' }}>
                                    Success
                                </Link>
                                <Link href='#' id='ElementsYozuv7' sx={{ borderRadius: '3px' }}>
                                    Info
                                </Link>
                                <Link href='#' id='ElementsYozuv8' sx={{ borderRadius: '3px' }}>
                                    Warning
                                </Link>
                                <Link href='#' id='ElementsYozuv11' sx={{ borderRadius: '3px' }}>
                                    Danger
                                </Link>
                                <Link href='#' id='ElementsYozuv9' sx={{ borderRadius: '3px' }}>
                                    Link
                                </Link>
                                <Link href='#' id='ElementsYozuv10' sx={{ borderRadius: '3px' }}>
                                    Disable
                                </Link>
                            </Box>
                            <Box sx={{ boxSizing: 'border-box', marginTop: '10px' }}>
                                <Link href='#' id='ElementsYozuv12' sx={{ borderRadius: '3px' }}>
                                    Default
                                </Link>
                                <Link href='#' id='ElementsYozuv13' sx={{ borderRadius: '3px' }}>
                                    Primary
                                </Link>
                                <Link href='#' id='ElementsYozuv14' sx={{ borderRadius: '3px' }}>
                                    Success
                                </Link>
                                <Link href='#' id='ElementsYozuv15' sx={{ borderRadius: '3px' }}>
                                    Info
                                </Link>
                                <Link href='#' id='ElementsYozuv16' sx={{ borderRadius: '3px' }}>
                                    Warning
                                </Link>
                                <Link href='#' id='ElementsYozuv17' sx={{ borderRadius: '3px' }}>
                                    Danger
                                </Link>
                                <Link href='#' id='ElementsYozuv18' sx={{ borderRadius: '3px' }}>
                                    Link
                                </Link>
                                <Link href='#' id='ElementsYozuv19' sx={{ borderRadius: '3px' }}>
                                    Disable
                                </Link>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ boxSizing: 'border-box', marginTop: '40px' }}>
                                <Link href='#' id='ElementsYozuv4' sx={{ borderRadius: '20px' }}>
                                    Default
                                </Link>
                                <Link href='#' id='ElementsYozuv5' sx={{ borderRadius: '20px' }}>
                                    Primary
                                </Link>
                                <Link href='#' id='ElementsYozuv6' sx={{ borderRadius: '20px' }}>
                                    Success
                                </Link>
                                <Link href='#' id='ElementsYozuv7' sx={{ borderRadius: '20px' }}>
                                    Info
                                </Link>
                                <Link href='#' id='ElementsYozuv8' sx={{ borderRadius: '20px' }}>
                                    Warning
                                </Link>
                                <Link href='#' id='ElementsYozuv11' sx={{ borderRadius: '20px' }}>
                                    Danger
                                </Link>
                                <Link href='#' id='ElementsYozuv9' sx={{ borderRadius: '20px' }}>
                                    Link
                                </Link>
                                <Link href='#' id='ElementsYozuv10' sx={{ borderRadius: '20px' }}>
                                    Disable
                                </Link>
                            </Box>
                            <Box sx={{ boxSizing: 'border-box', marginTop: '10px' }}>
                                <Link href='#' id='ElementsYozuv12' sx={{ borderRadius: '20px' }}>
                                    Default
                                </Link>
                                <Link href='#' id='ElementsYozuv13' sx={{ borderRadius: '20px' }}>
                                    Primary
                                </Link>
                                <Link href='#' id='ElementsYozuv14' sx={{ borderRadius: '20px' }}>
                                    Success
                                </Link>
                                <Link href='#' id='ElementsYozuv15' sx={{ borderRadius: '20px' }}>
                                    Info
                                </Link>
                                <Link href='#' id='ElementsYozuv16' sx={{ borderRadius: '20px' }}>
                                    Warning
                                </Link>
                                <Link href='#' id='ElementsYozuv17' sx={{ borderRadius: '20px' }}>
                                    Danger
                                </Link>
                                <Link href='#' id='ElementsYozuv18' sx={{ borderRadius: '20px' }}>
                                    Link
                                </Link>
                                <Link href='#' id='ElementsYozuv19' sx={{ borderRadius: '20px' }}>
                                    Disable
                                </Link>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ boxSizing: 'border-box', marginTop: '40px' }}>
                                <Link href='#' id='ElementsYozuv4' sx={{ borderRadius: '20px' }}>
                                    Default
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                                <Link href='#' id='ElementsYozuv5' sx={{ borderRadius: '20px' }}>
                                    Primary
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                                <Link href='#' id='ElementsYozuv6' sx={{ borderRadius: '20px' }}>
                                    Success
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                                <Link href='#' id='ElementsYozuv7' sx={{ borderRadius: '20px' }}>
                                    Info
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                                <Link href='#' id='ElementsYozuv8' sx={{ borderRadius: '20px' }}>
                                    Warning
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                                <Link href='#' id='ElementsYozuv11' sx={{ borderRadius: '20px' }}>
                                    Danger
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                            </Box>
                            <Box sx={{ boxSizing: 'border-box', marginTop: '10px' }}>
                                <Link href='#' id='ElementsYozuv12' sx={{ borderRadius: '20px' }}>
                                    Default
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                                <Link href='#' id='ElementsYozuv13' sx={{ borderRadius: '20px' }}>
                                    Primary
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                                <Link href='#' id='ElementsYozuv14' sx={{ borderRadius: '20px' }}>
                                    Success
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                                <Link href='#' id='ElementsYozuv15' sx={{ borderRadius: '20px' }}>
                                    Info
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                                <Link href='#' id='ElementsYozuv16' sx={{ borderRadius: '20px' }}>
                                    Warning
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                                <Link href='#' id='ElementsYozuv17' sx={{ borderRadius: '20px' }}>
                                    Danger
                                    <BsArrowRight style={{ marginBottom: '-2.5px', marginLeft: '10px' }} />
                                </Link>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ marginTop: '40px' }}>
                                <Link id='ElementsYozuv20'>
                                    Extra Large
                                </Link>
                                <Link id='ElementsYozuv21'>
                                    Large
                                </Link>
                                <Link id='ElementsYozuv22'>
                                    Default
                                </Link>
                                <Link id='ElementsYozuv23'>
                                    Medium
                                </Link>
                                <Link id='ElementsYozuv24'>
                                    Small
                                </Link>
                            </Box>
                            <Box sx={{ marginTop: '40px' }}>
                                <Link id='ElementsYozuv25'>
                                    Extra Large
                                </Link>
                                <Link id='ElementsYozuv26'>
                                    Large
                                </Link>
                                <Link id='ElementsYozuv27'>
                                    Default
                                </Link>
                                <Link id='ElementsYozuv28'>
                                    Medium
                                </Link>
                                <Link id='ElementsYozuv29'>
                                    Small
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Box sx={{
                        borderTop: '1px dotted #eee',
                        padding: '70px 0'
                    }}>
                        <Typography id='ElementsYozuv30'>
                            Left Aligned
                        </Typography>
                        <Box>
                            <Grid container>
                                <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                                    <Box sx={{
                                        width: '100%',
                                        padding: '0 15px'
                                    }}>
                                        <img src={ElemenImg1} alt="" width={'100%'} id='dfzgsgdxgrxdg' />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
                                    <Box sx={{ padding: '0 15px' }}>
                                        <Typography id='ElementsYozuv31'>
                                            Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Box sx={{
                        borderTop: '1px dotted #eee',
                        padding: '70px 0'
                    }}>
                        <Typography id='ElementsYozuv32'>
                            Right Aligned
                        </Typography>
                        <Box>
                            <Grid container>
                                <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
                                    <Box sx={{ padding: '0 15px' }}>
                                        <Typography id='ElementsYozuv33'>
                                            Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                                    <Box sx={{
                                        width: '100%',
                                        padding: '0 15px',
                                        display: 'flex',
                                        justifyContent: 'right'
                                    }}>
                                        <img src={ElemenImg1} alt="" width={'100%'} id='dfzgsgdxgrxdg' />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Box sx={{
                        borderTop: '1px dotted #eee',
                        padding: '70px 0'
                    }}>
                        <Typography id='ElementsYozuv30'>
                            Definition
                        </Typography>
                        <Box>
                            <Grid container>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <Box sx={{ padding: '0 15px' }}>
                                        <Typography id='ElementsYozuv34'>
                                            Definition 01
                                        </Typography>
                                        <Typography id='ElementsYozuv35'>
                                            Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <Box sx={{ padding: '0 15px' }}>
                                        <Typography id='ElementsYozuv34'>
                                            Definition 02
                                        </Typography>
                                        <Typography id='ElementsYozuv35'>
                                            Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <Box sx={{ padding: '0 15px' }}>
                                        <Typography id='ElementsYozuv34'>
                                            Definition 03
                                        </Typography>
                                        <Typography id='ElementsYozuv35'>
                                            Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Box sx={{
                        borderTop: '1px dotted #eee',
                        padding: '70px 0'
                    }}>
                        <Typography id='ElementsYozuv30'>
                            Block Quotes
                        </Typography>
                        <Box sx={{ padding: '0 15px' }}>
                            <blockquote id='ElementsYozuv36'>
                                “Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking”
                            </blockquote>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Box sx={{
                        borderTop: '1px dotted #eee',
                        padding: '70px 15px'
                    }}>
                        <Typography id='ElementsYozuv30gs'>
                            Block Quotes
                        </Typography>
                        <Box sx={{ overflowX: 'scroll' }}>
                            <Box id='ElementsYozuv37'>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Typography id='ElementsYozuv38'>#</Typography>
                                    <Typography id='ElementsYozuv39'>COUNTRIES</Typography>
                                    <Typography id='ElementsYozuv40'>VISITS</Typography>
                                    <Typography id='ElementsYozuv41'>PERCENTAGES</Typography>
                                </Box>
                                <Box id='ElementsYozuv47'>
                                    <Typography id='ElementsYozuv42'>01</Typography>
                                    <Typography id='ElementsYozuv43'>
                                        <img src={ElemenImgbay1} alt="" width={'50px'} style={{ marginRight: '15px' }} />
                                        Canada
                                    </Typography>
                                    <Typography id='ElementsYozuv44'>645032</Typography>
                                    <Box id='ElementsYozuv45'>
                                        <Box id='ElementsYozuv46'>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box id='ElementsYozuv47'>
                                    <Typography id='ElementsYozuv42'>01</Typography>
                                    <Typography id='ElementsYozuv43'>
                                        <img src={ElemenImgbay2} alt="" width={'50px'} style={{ marginRight: '15px' }} />
                                        Canada
                                    </Typography>
                                    <Typography id='ElementsYozuv44'>645032</Typography>
                                    <Box id='ElementsYozuv45'>
                                        <Box id='ElementsYozuv48'>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box id='ElementsYozuv47'>
                                    <Typography id='ElementsYozuv42'>01</Typography>
                                    <Typography id='ElementsYozuv43'>
                                        <img src={ElemenImgbay3} alt="" width={'50px'} style={{ marginRight: '15px' }} />
                                        Canada
                                    </Typography>
                                    <Typography id='ElementsYozuv44'>645032</Typography>
                                    <Box id='ElementsYozuv45'>
                                        <Box id='ElementsYozuv49'>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box id='ElementsYozuv47'>
                                    <Typography id='ElementsYozuv42'>01</Typography>
                                    <Typography id='ElementsYozuv43'>
                                        <img src={ElemenImgbay4} alt="" width={'50px'} style={{ marginRight: '15px' }} />
                                        Canada
                                    </Typography>
                                    <Typography id='ElementsYozuv44'>645032</Typography>
                                    <Box id='ElementsYozuv45'>
                                        <Box id='ElementsYozuv50'>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box id='ElementsYozuv47'>
                                    <Typography id='ElementsYozuv42'>01</Typography>
                                    <Typography id='ElementsYozuv43'>
                                        <img src={ElemenImgbay5} alt="" width={'50px'} style={{ marginRight: '15px' }} />
                                        Canada
                                    </Typography>
                                    <Typography id='ElementsYozuv44'>645032</Typography>
                                    <Box id='ElementsYozuv45'>
                                        <Box id='ElementsYozuv51'>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box id='ElementsYozuv47'>
                                    <Typography id='ElementsYozuv42'>01</Typography>
                                    <Typography id='ElementsYozuv43'>
                                        <img src={ElemenImgbay6} alt="" width={'50px'} style={{ marginRight: '15px' }} />
                                        Canada
                                    </Typography>
                                    <Typography id='ElementsYozuv44'>645032</Typography>
                                    <Box id='ElementsYozuv45'>
                                        <Box id='ElementsYozuv52'>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box id='ElementsYozuv47'>
                                    <Typography id='ElementsYozuv42'>01</Typography>
                                    <Typography id='ElementsYozuv43'>
                                        <img src={ElemenImgbay7} alt="" width={'50px'} style={{ marginRight: '15px' }} />
                                        Canada
                                    </Typography>
                                    <Typography id='ElementsYozuv44'>645032</Typography>
                                    <Box id='ElementsYozuv45'>
                                        <Box id='ElementsYozuv53'>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box id='ElementsYozuv47'>
                                    <Typography id='ElementsYozuv42'>01</Typography>
                                    <Typography id='ElementsYozuv43'>
                                        <img src={ElemenImgbay8} alt="" width={'50px'} style={{ marginRight: '15px' }} />
                                        Canada
                                    </Typography>
                                    <Typography id='ElementsYozuv44'>645032</Typography>
                                    <Box id='ElementsYozuv45'>
                                        <Box id='ElementsYozuv54'>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Box sx={{
                        borderTop: '1px dotted #eee',
                        padding: '70px 0'
                    }}>
                        <Typography id='ElementsYozuv55'>
                            Image Gallery
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <Box sx={{
                                        padding: '0 15px',
                                        width: '100%'
                                    }}>
                                        <img src="https://preview.colorlib.com/theme/carrental/img/elements/g1.jpg" alt="" id='ElementsYozuv56' width={'100%'} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <Box sx={{
                                        padding: '0 15px',
                                        width: '100%'
                                    }}>
                                        <img src="https://preview.colorlib.com/theme/carrental/img/elements/g2.jpg" alt="" id='ElementsYozuv56' width={'100%'} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <Box sx={{
                                        padding: '0 15px',
                                        width: '100%'
                                    }}>
                                        <img src="https://preview.colorlib.com/theme/carrental/img/elements/g3.jpg" alt="" id='ElementsYozuv56' width={'100%'} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={6} xl={6}>
                                    <Box sx={{
                                        padding: '0 15px',
                                        width: '100%'
                                    }}>
                                        <img src="https://preview.colorlib.com/theme/carrental/img/elements/g4.jpg" alt="" id='ElementsYozuv56' width={'100%'} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <Box sx={{
                                        padding: '0 15px',
                                        width: '100%'
                                    }}>
                                        <img src="https://preview.colorlib.com/theme/carrental/img/elements/g5.jpg" alt="" id='ElementsYozuv56' width={'100%'} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <Box sx={{
                                        padding: '0 15px',
                                        width: '100%'
                                    }}>
                                        <img src="https://preview.colorlib.com/theme/carrental/img/elements/g6.jpg" alt="" id='ElementsYozuv56' width={'100%'} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <Box sx={{
                                        padding: '0 15px',
                                        width: '100%'
                                    }}>
                                        <img src="https://preview.colorlib.com/theme/carrental/img/elements/g7.jpg" alt="" id='ElementsYozuv56' width={'100%'} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <Box sx={{
                                        padding: '0 15px',
                                        width: '100%'
                                    }}>
                                        <img src="https://preview.colorlib.com/theme/carrental/img/elements/g8.jpg" alt="" id='ElementsYozuv56' width={'100%'} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Box sx={{
                        borderTop: '1px dotted #eee',
                        padding: '70px 0'
                    }}>
                        <Grid container>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Box sx={{ padding: '0 15px' }}>
                                    <Typography id='ElementsYozuv57'>
                                        Image Gallery
                                    </Typography>
                                    <Box>
                                        <Typography id='ElementsYozuv58'>
                                            This is header 01
                                        </Typography>
                                        <Typography id='ElementsYozuv59'>
                                            This is header 02
                                        </Typography>
                                        <Typography id='ElementsYozuv60'>
                                            This is header 03
                                        </Typography>
                                        <Typography id='ElementsYozuv61'>
                                            This is header 04
                                        </Typography>
                                        <Typography id='ElementsYozuv62'>
                                            This is header 05
                                        </Typography>
                                        <Typography id='ElementsYozuv63'>
                                            This is header 06
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Box sx={{ padding: '0 15px' }}>
                                    <Typography id='ElementsYozuv57'>
                                        Unordered List
                                    </Typography>
                                    <Box>
                                        <Typography id='ElementsYozuv64'>
                                            <FiCircle id='ElementsYozuv65' />
                                            Fta Keys
                                        </Typography>
                                        <Typography id='ElementsYozuv64'>
                                            <FiCircle id='ElementsYozuv65' />
                                            For Women Only Your Computer Usage
                                        </Typography>
                                        <Typography id='ElementsYozuv64'>
                                            <FiCircle id='ElementsYozuv65' />
                                            Facts Why Inkjet Printing Is Very Appealing
                                        </Typography>
                                        <Typography id='ElementsYozuv66'>
                                            <FiCircle id='ElementsYozuv65' />
                                            Facts Why Inkjet Printing Is Very Appealing
                                        </Typography>
                                        <Typography id='ElementsYozuv67'>
                                            <FiCircle id='ElementsYozuv65' />
                                            Facts Why Inket Prting Is Very Appeaing
                                        </Typography>
                                        <Typography id='ElementsYozuv64'>
                                            <FiCircle id='ElementsYozuv65' />
                                            Dealing With Technical Support 10 Useful Tips
                                        </Typography>
                                        <Typography id='ElementsYozuv64'>
                                            <FiCircle id='ElementsYozuv65' />
                                            Make Myspace Your Best Designed Space
                                        </Typography>
                                        <Typography id='ElementsYozuv64'>
                                            <FiCircle id='ElementsYozuv65' />
                                            Cleaning And Organizing Your Computer
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Box sx={{ padding: '0 15px' }}>
                                    <Typography id='ElementsYozuv57'>
                                        Ordered List
                                    </Typography>
                                    <Box>
                                        <Typography id='ElementsYozuv64'>
                                            <span id='ElementsYozuv68'>
                                                01.
                                            </span>
                                            Fta Keys
                                        </Typography>
                                        <Typography id='ElementsYozuv64'>
                                            <span id='ElementsYozuv69'>
                                                02.
                                            </span>
                                            For Women Only Your Computer Usage
                                        </Typography>
                                        <Typography id='ElementsYozuv64'>
                                            <span id='ElementsYozuv69'>
                                                03.
                                            </span>
                                            Facts Why Inkjet Printing Is Very Appealing
                                        </Typography>
                                        <Typography id='ElementsYozuv66'>
                                            <span id='ElementsYozuv69'>
                                                a.
                                            </span>
                                            Facts Why Inkjet Printing Is Very Appealing
                                        </Typography>
                                        <Typography id='ElementsYozuv67'>
                                            <span id='ElementsYozuv69'>
                                                i.
                                            </span>
                                            Facts Why Inket Prting Is Very Appeaing
                                        </Typography>
                                        <Typography id='ElementsYozuv64'>
                                            <span id='ElementsYozuv69'>
                                                04.
                                            </span>
                                            Dealing With Technical Support 10 Useful Tips
                                        </Typography>
                                        <Typography id='ElementsYozuv64'>
                                            <span id='ElementsYozuv69'>
                                                05.
                                            </span>
                                            Make Myspace Your Best Designed Space
                                        </Typography>
                                        <Typography id='ElementsYozuv64'>
                                            <span id='ElementsYozuv69'>
                                                06.
                                            </span>
                                            Cleaning And Organizing Your Computer
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ padding: '70px 0', borderTop: '1px dotted #eee' }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={8} md={8} lg={8} xl={8} sx={{ padding: '0 15px' }}>
                            <Box>
                                <Typography id='ElementsYozuv70'>
                                    Form Element
                                </Typography>
                                <Box>
                                    <input type="text" placeholder='First Name' id='ElementsYozuv71' />
                                    <input type="text" placeholder='Last Name' id='ElementsYozuv71' />
                                    <input type="text" placeholder='Last Name' id='ElementsYozuv71' />
                                    <input type="text" placeholder='Email address' id='ElementsYozuv71' />
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Typography sx={{
                                            width: '45px',
                                            background: '#f9f9ff',
                                            color: '#797979',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '40px',
                                            marginTop: '10px'
                                        }}>
                                            <FaThumbtack />
                                        </Typography>
                                        <input type="text" placeholder='Address' id='ElementsYozuv72' />
                                    </Box>
                                    <Box id='elemenlbutcush1' >
                                        <React.Fragment>
                                            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                                                <Button onClick={handleClick}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', maxHeight: '40px' }}>
                                                        <Typography sx={{
                                                            minWidth: '45px',
                                                            background: '#f9f9ff',
                                                            color: '#797979',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}>
                                                            <FaPlaneDeparture />
                                                        </Typography>
                                                        {options[selectedIndex]}
                                                    </Box>
                                                    <MdOutlineKeyboardArrowDown style={{
                                                        fontSize: '22px',
                                                    }} />
                                                </Button>
                                            </ButtonGroup>
                                            <Popper
                                                sx={{
                                                    zIndex: 1,
                                                }}
                                                open={open}
                                                anchorEl={anchorRef.current}
                                                role={undefined}
                                                transition
                                                disablePortal
                                            >
                                                {({ TransitionProps, placement }) => (
                                                    <Grow
                                                        {...TransitionProps}
                                                        style={{
                                                            transformOrigin:
                                                                placement === 'bottom' ? 'center top' : 'center bottom',
                                                        }}
                                                    >
                                                        <Paper>
                                                            <ClickAwayListener onClickAway={handleClose}>
                                                                <MenuList id="split-button-menu" autoFocusItem>
                                                                    {options.map((option, index) => (
                                                                        <MenuItem
                                                                            key={option}
                                                                            selected={index === selectedIndex}
                                                                            onClick={(event) => handleMenuItemClick(event, index)}
                                                                            sx={{
                                                                                width: '100%'
                                                                            }}
                                                                        >
                                                                            {option}
                                                                        </MenuItem>
                                                                    ))}
                                                                </MenuList>
                                                            </ClickAwayListener>
                                                        </Paper>
                                                    </Grow>
                                                )}
                                            </Popper>
                                        </React.Fragment>
                                    </Box>
                                    <Elm />
                                    <textarea placeholder="Message" id='ElementsYozuv80'></textarea>
                                    <input type="text" placeholder='Primary color' id='ElementsYozuv81' />
                                    <input type="text" placeholder='Accent color' id='ElementsYozuv82' />
                                    <input type="text" placeholder='Secondary color' id='ElementsYozuv83' />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} lg={3} xl={3} sx={{ padding: '0 15px' }}>
                            <Box>
                                <Typography id='ElementsYozuv70'>
                                    Switches
                                </Typography>
                                <Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: '10px'
                                    }}>
                                        <Typography id='ElementsYozuv85'>
                                            01. Sample Switch
                                        </Typography>
                                        <Typography id='ElementsYozuv84'>
                                            <Switch {...label} />
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: '10px'
                                    }}>
                                        <Typography id='ElementsYozuv85'>
                                            02. Primary Color Switch
                                        </Typography>
                                        <Typography id='ElementsYozuv84'>
                                            <Switch {...label} defaultChecked />
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: '25px'
                                    }}>
                                        <Typography id='ElementsYozuv85'>
                                            03. Confirm Color Switch
                                        </Typography>
                                        <Typography id='ElementsYozuv86'>
                                            <Switch {...label} defaultChecked />
                                        </Typography>
                                    </Box>
                                    <Typography id='ElementsYozuv70'>
                                        Switches
                                    </Typography>
                                    <Elem />
                                    <Box sx={{
                                        marginTop: '30px'
                                    }}>
                                        <Typography id='ElementsYozuv70'>
                                            Checkboxes
                                        </Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Typography id='ElementsYozuv85'>
                                                01. Sample Checkbox
                                            </Typography>
                                            <Typography id='ElementsYozuv87'>
                                                <BpCheckbox />
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Typography id='ElementsYozuv85'>
                                                02. Primary Color Checkbox
                                            </Typography>
                                            <Typography id='ElementsYozuv87'>
                                                <BpCheckbox defaultChecked />
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Typography id='ElementsYozuv85'>
                                                03. Confirm Color Checkbox
                                            </Typography>
                                            <Typography id='ElementsYozuv88'>
                                                <BpCheckbox />
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Typography id='ElementsYozuv85'>
                                                04. Disabled Checkbox
                                            </Typography>
                                            <Typography id='ElementsYozuv89' sx={{
                                                cursor: 'not-allowed'
                                            }}>
                                                <BpCheckbox disabled />
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Typography id='ElementsYozuv85'>
                                                05. Disabled Checkbox active
                                            </Typography>
                                            <Typography id='ElementsYozuv90' sx={{
                                                cursor: 'not-allowed'
                                            }}>
                                                <BpCheckbox disabled checked />
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ marginTop: '30px' }}>
                                        <Typography id='ElementsYozuv70'>
                                            Radios
                                        </Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '8px'
                                        }}>
                                            <Typography id='ElementsYozuv85'>
                                                01. Sample radio
                                            </Typography>
                                            <Typography id='ElementsYozuv91'>
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '8px'
                                        }}>
                                            <Typography id='ElementsYozuv85'>
                                                02. Primary Color radio
                                            </Typography>
                                            <Typography id='ElementsYozuv93'>
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '8px'
                                        }}>
                                            <Typography id='ElementsYozuv85'>
                                                03. Confirm Color radio
                                            </Typography>
                                            <Typography id='ElementsYozuv94'>
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '8px'
                                        }}>
                                            <Typography id='ElementsYozuv85'>
                                                04. Disabled radio
                                            </Typography>
                                            <Typography id='ElementsYozuv92'>
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '8px'
                                        }}>
                                            <Typography id='ElementsYozuv85'>
                                                05. Disabled radio active
                                            </Typography>
                                            <Typography id='ElementsYozuv92'>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}
export default Elements;