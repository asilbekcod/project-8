import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import rasm from "../../imgs/header-bg.jpg.webp"
import Choos from '../choos'
import Choose from './choose'
import Export from './exp'
import Global from './global'
import Latest from './latest'
import Some from './some'
import "./style.css"
import Time from './time'
import What from './what'


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function Home() {


  return (
    <Box>
      <Box sx={{
        width: "auto",
        height: { lg: "100vh", md: "100vh", sm: "100vh", xs: "100%" },
        position: "absolute"
      }}>
        <img src={rasm} alt="" style={{ width: "99%", height: "100%" }} />
      </Box>
      <Box sx={{
        width: "100%",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.8)",
        position: "relative"
      }}>
        <Container sx={{
          display: "flex",
          alignItems: "center",
        }}>
          <Grid container spacing={2}>
            <Grid item lg={7} md={7} sm={6} xs={12} sx={{
              display: { lg: "flex", md: "flex", sm: "flex", xs: "none" }
            }}>
              <Box sx={{
                display: "flex",
                alignItems: "center",
                height: "100vh",
                width: "100% "
              }}>
                <Box>

                  <Typography sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "white"
                  }}>
                    THE ROYAL ESSENCE OF JOURNEY
                  </Typography>
                  <Typography sx={{
                    fontSize: "48px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    mt: "15px",
                    color: "white"
                  }}>
                    RELAXED JOURNEY EVER
                  </Typography>
                  <Typography sx={{
                    fontSize: "14px",
                    color: "white",
                    p: "20px 0"


                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Box sx={{
                    mt: "20px"
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
                      color: "white"
                    }}>
                      RENT CAR NOW
                    </Link>
                  </Box>
                </Box>

              </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={6} xs={12} sx={{
              mt:"45px"
            }}>
              <Typography sx={{
                display: { lg: "none ", md: "none", sm: "none", xs: "flex" },
                fontSize: "30px",
                m: "20px 0 0",
                p: "50px 0 0",
                color: "white",
                fontWeight: "600",
                letterSpacing: "0px"
              }}>
                RELAXED JOURNEY EVER
              </Typography>
              <Box sx={{
                display: "flex",
                alignItems: "center",
                height: "100vh"
              }}>

                <Box sx={{
                  background: "rgba(32, 46, 69, 0.4)",
                  border: "1px solid #4b5263",
                  p: "50px",
                  width: "100%"
                }}>


                  <Typography sx={{
                    fontSize: "18px",
                    p: "0 0 30px",
                    color: "white",
                    fontWeight: "600"
                  }}>
                    Book Your Car Today!
                  </Typography>
                  <Box sx={{
                    mb: "15px"
                  }}>
                    <select name="cars" className='selle'>
                      <option value="volvo">Select Your Car</option>
                      <option value="saab" className='selel'>Saab</option>
                      <option value="opel" className='selel'>Opel</option>
                      <option value="audi" className='selel'>Audi</option>
                    </select>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box sx={{
                        mb: "15px"
                      }}>
                        <select name="cars" className='selle'>
                          <option value="volvo">Pickup</option>
                          <option value="saab" className='selel'>Saab</option>
                          <option value="opel" className='selel'>Opel</option>
                          <option value="audi" className='selel'>Audi</option>
                        </select>
                      </Box>

                      <Box>
                        <select name="cars" className='selle'>
                          <option value="volvo">Drop off</option>
                          <option value="saab" className='selel'>Saab</option>
                          <option value="opel" className='selel'>Opel</option>
                          <option value="audi" className='selel'>Audi</option>
                        </select>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker />
                      </LocalizationProvider>
                      <Box sx={{ mt: "15px" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <DatePicker />
                        </LocalizationProvider>
                      </Box>
                    </Grid>
                  </Grid>

                  <Box>
                    <input type="text" className='inp' placeholder='Your Name' />
                    <input type="text" className='inp' placeholder='Email Adress' />
                    <input type="text" className='inp' placeholder='Phone Number' />
                  </Box>
                  <Box sx={{
                    width: "100%",
                    height: "40px",
                    background: "#fab700",
                    mt: "15px",
                    borderRadius: "5px",
                    // textTransform:"uppercase",
                    color: "white",
                    fontSize: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                  }}>
                    <Typography sx={{ textTransform: "uppercase" }}>Confirm Car Booking</Typography>
                  </Box>

                </Box>

              </Box>
            </Grid>
          </Grid>
        </Container>

      </Box>
      <What />
      <Global />
      <Choos />
      <Time />
      <Some />
      <Export />
      <Latest />

    </Box>
  )
}

export default Home