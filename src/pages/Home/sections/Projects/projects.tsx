import { Grid, Card, CardContent, Typography, CardMedia, Button, Container } from "@mui/material";
import hally from "../../../../assets/Images/hally.jpeg";
import React from "react";

const projects = [
  {
    title: "Portfólio",
    description: "Meu portfólio pessoal, feito com React e Material UI.",
    imageUrl: "/images/portfolio.png", 
    link: "https://www.seuportfolio.com",
  },
  {
    title: "Minha primeira pagina web",
    description: "Trabalho acadêmico sobre o tema livre.",
    imageUrl: hally, 
    link: "https://link-do-trabalho-1.com",
  },
  {
    title: "Trabalho de Faculdade 2",
    description: "Outro trabalho acadêmico feito com tecnologia Y.",
    imageUrl: "/images/faculdade2.png", 
    link: "https://link-do-trabalho-2.com", 
  },
  {
    title: "Jogo em C",
    description: "Um jogo simples feito em C.",
    imageUrl: "/images/jogo.png", 
    link: "https://link-do-jogo.com", 
  },
];

const Projects = () => {
  return (
    <Container id="projects" sx={{ padding: "20px", marginTop: "20px" }} data-aos="fade-up">
      <div style={{ paddingLeft: "20px" }}>
        <Typography variant="h6">What did I do</Typography>
        <Typography variant="h2" fontWeight="bold" sx={{ marginBottom: "40px" }}>
          Projects.
        </Typography>
      </div>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl} // Aqui você passa a imagem importada ou o caminho correto
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
