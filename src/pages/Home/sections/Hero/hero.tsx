import React from "react";
import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AnimatedBackground from "../../../../assets/Images/Components/AnimatedBackground";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100vh",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  position: "relative",
  zIndex: 1,

  [theme.breakpoints.up('xs')]: {
    paddingTop: "100px",
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: "100px",
  },
}));

const StyledImg = styled("img")({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "50%",
  border: "1px #7419E2 solid",
});

const Hero = () => {
  return (
    <StyledHero>
      <AnimatedBackground /> {/* Adiciona o fundo animado */}
      <Container>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5} lg={4} xl={3}>
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>
          <Grid item xs={12} md={7} lg={8} xl={9}>
            <Typography variant="h2" textAlign="center">
              Sabrina Cristina
            </Typography>
            <Typography variant="h4" textAlign="center" color="primary" sx={{ mb: 3 }}>
              I'm a software engineer
            </Typography>
            <Typography variant="body1" textAlign="justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
            </Typography>

            {/* Ajuste aqui para colocar os botões lado a lado */}
            <Grid container spacing={2} justifyContent="center" mt={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DownloadIcon />}
                  component="a"
                  href="/caminho-do-cv"
                >
                  Download CV
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PermContactCalendarIcon />}
                  component="a"
                  href="/contato"
                >
                  Contact me
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
