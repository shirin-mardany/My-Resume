import React from "react";
//styles>>
//mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

//img
import profileImg from "./img/profile.jfif";

//style mui
const centerFlex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function About() {
  return (
    <Container
      maxWidth="md"
      sx={{ py: 4, minWidth: "390px", bgcolor: "#212121" }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",

          ...centerFlex,
        }}
      >
        {/* 🔹 باکس اسم */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            color: "#e0e0e0",
            width: "49%",
            minWidth: "301px",
            height: "350px",
            maxHeight: "400px",
            border: "1px solid #eeeeee",
          }}
        >
          <Box
            sx={{
              p: 4,
              width: "100%",
              height: "100%",
              flexDirection: "column",
              ...centerFlex,
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              shirin mardani
            </Typography>
            <Typography variant="h6" gutterBottom>
              front end developer
            </Typography>
          </Box>
        </Grid>

        {/* 🔹 باکس عکس */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            border: "1px solid #eeeeee",
            width: "49%",
            minWidth: "301px",
            height: "350px",
            maxHeight: "400px",
            ...centerFlex,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={profileImg}
              alt="profile picture"
              style={{
                maxWidth: "300px",
              }}
            />
          </Box>
        </Grid>

        {/* 🔹 درباره من */}
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            border: "1px solid #eeeeee",
          }}
        >
          <Grid item xs={12} md={4} sx={{ color: "#e0e0e0", width: "100%" }}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                about me
              </Typography>
              <Typography variant="h6" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste
                aut architecto enim modi ullam non, commodi delectus facilis
                voluptatem, quibusdam qui ipsum tempora asperiores natus est
                nobis praesentium id!
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
        <Grid
          container
          spacing={2}
          sx={{
            border: "1px solid #eeeeee",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gridTemplateRows: "repeat(2, 350px)",
            width: "100%",
          }}
        >
          {/* ------------------ */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              border: "1px solid #eeeeee",
              bgcolor: "#ff9100",
            }}
          >
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                shirin mardani
              </Typography>
              <Typography variant="h6" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste
                aut architecto enim modi ullam non, commodi delectus facilis
                voluptatem, quibusdam qui ipsum tempora asperiores natus est
                nobis praesentium id!
              </Typography>
            </Box>
          </Grid>
          {/* ------------------ */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              border: "1px solid #eeeeee",
              gridRow: "span 2",
              bgcolor: "pink",
            }}
          >
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste
                aut architecto enim modi ullam non, commodi delectus facilis
                voluptatem, quibusdam qui ipsum tempora asperiores natus est
                nobis praesentium id!
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                shirin mardani
              </Typography>
            </Box>
          </Grid>
          {/* ------------------ */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              border: "1px solid #eeeeee",
              bgcolor: "#00ffff",
            }}
          >
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                shirin mardani
              </Typography>
              <Typography variant="h6" gutterBottom>
                front end developer
              </Typography>
            </Box>
          </Grid>

          {/* 🔹 درباره من */}
        </Grid>
      </Grid>
    </Container>
  );
}
