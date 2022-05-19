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
        <Typography pt={2} fontSize={24} fontWeight="800" textAlign="center">
          Menu and Guest Seating
        </Typography>
        <Typography fontSize={14} textAlign="center">
          We're so happy you could make it to our wedding!
        </Typography>
        <Box display="flex" justifyContent={"center"} py={2}>
          <img src="/leafs.png" height={30} style={{ objectFit: "contain" }} />
        </Box>
        <Box pt={2} display="flex" flexDirection={"column"} gap={1}>
          <Typography fontSize={16} fontWeight={800} textAlign="center">
            Dinner Menu
          </Typography>
          <Box>
            <Typography fontSize={16} fontWeight={500}>
              SOUP
            </Typography>
            <Typography fontSize={14}>Chicken Florentine</Typography>
          </Box>
          <Box>
            <Typography fontSize={16} fontWeight={500}>
              SALAD
            </Typography>
            <Typography fontSize={14}>House Tossed in Cucumber Bowl</Typography>
          </Box>
          <Box>
            <Typography fontSize={16} fontWeight={500}>
              ENTRÉE CHOICE
            </Typography>
            <Typography fontSize={14}>Steak Delmonico*</Typography>
            <Typography fontSize={14}>Chicken Breast Limóne</Typography>
            <Typography fontSize={14}>Baked New England Cod</Typography>
            <Typography fontSize={12}>
              All entrees are accompanied by Garlic Mashed Potatoes and String
              Bean Almandine
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={16} fontWeight={500}>
              DESSERT
            </Typography>
            <Typography fontSize={14}>Tuscan Bread Pudding</Typography>
            <Typography fontSize={14}>Wedding Cake</Typography>
            <Typography fontSize={14}>Les Patisseries Sweets</Typography>
          </Box>
          <Typography fontSize={14} fontWeight={500}>
            **Please remind the staff of any dietary restrictions**
          </Typography>
        </Box>
        <Box display="flex" justifyContent={"center"} py={2}>
          <img src="/leafs.png" height={30} style={{ objectFit: "contain" }} />
        </Box>
        <Box
          pt={2}
          display="flex"
          flexDirection={"column"}
          gap={1}
          justifyContent="center"
        >
          <Typography fontSize={16} fontWeight={800} textAlign="center">
            Guest List
          </Typography>
          <TextField
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
                <Box
                  key={`${seat.firstName}-${seat.lastName}`}
                  textAlign="center"
                >
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
