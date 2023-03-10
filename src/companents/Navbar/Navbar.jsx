import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { MdKeyboardArrowDown } from "react-icons/md";
import NavbarImg1 from '../../assets/Img/logo.webp';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Navbar.css'
import { NavbarMap } from '../../assets/NavbarMap/NavbarMap';
import { Link } from 'react-router-dom';

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [height, setHeight] = useState(0);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setHeight(window.pageYOffset);
        })
        return () => window.removeEventListener('scroll', () => { })
    })

    return (
        <Box id='Navbar'>
            <AppBar position="fixed" sx={{
                background: height > 100 ? "rgba(0, 0, 0, 0.8)" : "transparent",
                transition: 'all 0.5s',
            }}>
                <Container>
                    <Toolbar disableGutters>
                        <Typography>
                            <img src={NavbarImg1} alt="" width={'192px'} height={'30px'} />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, height: '100%', alignItems: 'center' }}>
                            {NavbarMap.map((val, i) => (
                                <Link
                                    key={i}
                                    onClick={handleCloseNavMenu}
                                    id='NavbarButtinni1'
                                    to={val.to}
                                >
                                    {val.Yoz}
                                </Link>
                            ))}
                            <Box id='NavTepJYoz3'>
                                <Typography id='NavTepJYoz4'>
                                    PAGES <MdKeyboardArrowDown style={{
                                        fontSize: '18px'
                                    }} />
                                </Typography>
                                <Box id='NavTepJYoz5'>
                                    <Link to='/choos' id='NavTepJYoz6'>
                                        Blog Single
                                    </Link>
                                    <Link to='/elements' id='NavTepJYoz6'>
                                        Elements
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar2t"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{
                                        background: 'rgba(0, 0, 0, 0.93)',
                                        minWidth: '260px',
                                        maxWidth: '260px',
                                        height: '100vh',
                                        paddingTop: '18px'
                                    }}>
                                        {NavbarMap.map((val, i) => (
                                            <Link
                                                key={i}
                                                onClick={handleCloseNavMenu}
                                                id='NavbarButtinni2'
                                                to={val.to}
                                            >
                                                {val.Yoz}
                                            </Link>
                                        ))}
                                        <Box id='navaccard'>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography id='Navdasahd'>PAGES</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Link to='/blog2' id='Navshcfuwd' onClick={handleCloseNavMenu}>
                                                    Blog Single
                                                    </Link>
                                                    <Link to='/elements' id='Navshcfuwd' onClick={handleCloseNavMenu}>
                                                    Elements
                                                    </Link>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Box>
                                    </Box>
                                    <Box onClick={handleCloseNavMenu} sx={{
                                        width: '100%',
                                        height: '100vh',
                                        background: 'rgba(0, 0, 0, 0.7)'
                                    }}>
                                    </Box>
                                </Box>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
export default Navbar;