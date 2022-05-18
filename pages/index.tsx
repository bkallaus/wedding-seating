import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

import React from 'react';
import {seats} from '../src/seats';


const Home: NextPage = () => {
  const [name, setName] = React.useState('');
 
  return (
    <div>
      <Head>
        <title>Ben and Michelle Guest Seating</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
          Ben and Michelle Guest Seating
      </Typography>
      <Box sx={{ my: 4 }}>
        <TextField label='Enter Guest Name' onChange={(e) => setName(e.target.value)} value={name}/>
        {
          seats.filter((seat) => {
            return seat.firstName.toLowerCase().includes(name.toLowerCase()) || seat.lastName.toLowerCase().includes(name.toLowerCase());
          }).map((seat) => {
            return <Box>
                  <Typography>{seat.firstName} {seat.lastName} - {seat.tableNumber}</Typography>
              </Box>;
          })
        }
      </Box>
    </Container>

    </div>
  )
}

export default Home
