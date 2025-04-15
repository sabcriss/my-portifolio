import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Avatar from "@/assets/Images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AnimatedBackground from "../../../../assets/Images/Components/AnimatedBackground";
import { styled } from "@mui/system";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: "70vh",
  padding: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  position: "relative",
  zIndex: 1,

  [theme.breakpoints.down('sm')]: {
    paddingTop: "80px",
    paddingBottom: "80px",
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
    <StyledHero id="about" data-aos="fade-up">
      <AnimatedBackground />
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5} lg={4} xl={3} textAlign="center">
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>

          <Grid item xs={12} md={7} lg={8} xl={9}>
            <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
              Sabrina Cristina
            </Typography>
            <Typography variant="h4" textAlign="center" color="primary" sx={{ mb: 3 }}>
              I'm a software engineer
            </Typography>
            <Typography variant="body1" textAlign="justify" sx={{ mb: 4 }}>
              Olá! Sou Sabrina Cristina, tenho 22 anos e estou no 3º semestre de Engenharia de Software. Tenho interesse em desenvolvimento Full Stack e estou em busca de oportunidades na área de TI.

              Possuo conhecimentos em HTML, CSS, C, JavaScript, React e uso o Figma para prototipação. Também estudo TypeScript, APIs, banco de dados e metodologias ágeis como Scrum. Tenho projetos pessoais e acadêmicos que reforçam minha prática e interesse na área.

            </Typography>

            <Grid container spacing={2} justifyContent="center">
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