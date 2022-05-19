import type { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

import React from "react";
import { seats } from "../src/seats";

const Home: NextPage = () => {
  const [name, setName] = React.useState("");

  return (
    <div>
      <Head>
        <title>Ben and Michelle Menu and Guest Seating</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <Typography pt={4} fontSize={24} fontWeight="800">
          Menu and Guest Seating
        </Typography>
        <Typography fontSize={14}>
          We're so happy you could make it to our wedding!
        </Typography>
        <Box pt={4}>
          <Typography fontSize={16} fontWeight={800}>
            Menu
          </Typography>
          <Typography fontSize={16} fontWeight={500}>
            SOUP
          </Typography>
          <Typography fontSize={14}>Chicken Florentine</Typography>
          <Typography fontSize={16} fontWeight={500}>
            SALAD
          </Typography>
          <Typography fontSize={14}>House Tossed in Cucumber Bowl</Typography>
          <Typography fontSize={16} fontWeight={500}>
            ENTRÉE CHOICE
          </Typography>
          <Typography fontSize={14}>
            Steak Delmonico* Chicken Breast Limóne* Baked New England Cod*
          </Typography>
          <Typography fontSize={14}>
            *All entrees are accompanied by Garlic Mashed Potatoes and String
            Bean Almandine
          </Typography>

          <Typography fontSize={18} fontWeight={500}>
            DESSERT
          </Typography>
          <Typography fontSize={14}>
            Tuscan Bread Pudding Wedding Cake Les Patisseries Sweets
          </Typography>
          <Typography fontSize={16} fontWeight={500} pt={4}>
            **Please remind the staff of any dietary restrictions**
          </Typography>
        </Box>
        <Box pt={4}>
          <Typography fontSize={16} fontWeight={800}>
            Guest List
          </Typography>
          <TextField
            fullWidth
            sx={{ my: 2 }}
            label="Enter Guest Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {seats
            .filter((seat) => {
              return (
                seat.firstName.toLowerCase().includes(name.toLowerCase()) ||
                seat.lastName.toLowerCase().includes(name.toLowerCase())
              );
            })
            .map((seat) => {
              return (
                <Box key={`${seat.firstName}-${seat.lastName}`} py={1}>
                  <Typography>
                    {seat.firstName} {seat.lastName} - {seat.tableNumber}
                  </Typography>
                </Box>
              );
            })}
        </Box>
      </Container>
    </div>
  );
};

export default Home;
