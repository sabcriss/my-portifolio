import { Grid, Card, CardContent, Typography, CardMedia, Button, Container } from "@mui/material";
import hally from "../../../../assets/Images/hally.jpeg";
import React from "react";

const projects = [
  {
    title: "Farma Já",
    description: "Sistema completo de delivery de farmácias, englobando o design de telas, fluxos de checkout e listagem de produtos.",
    imageUrl: hally, // Altere depois para a imagem mockada do Farma Já se preferir!
    link: "https://github.com/sabcriss/FarmaJa",
  },
  {
    title: "Gerenciador de Restaurante",
    description: "Aplicação Full Stack integrada para gestão de pedidos, mesas, reservas, controle de usuários e geração de relatórios.",
    imageUrl: "/images/restaurante.png", 
    link: "https://github.com/sabcriss/Restaurante",
  },
  {
    title: "Análise de Acidentes de Trânsito",
    description: "Projeto acadêmico em Python utilizando Streamlit para análise de dados e geração de gráficos estatísticos sobre o trânsito brasileiro.",
    imageUrl: "/images/transito.png", 
    link: "https://github.com/felipe-rib/Projeto_Streamlit_Novas_Tecnologias_UCB", 
  },
  {
    title: "Bibliotech",
    description: "Sistema desenvolvido para o gerenciamento dinâmico e organização de acervos, empréstimos e usuários de uma biblioteca.",
    imageUrl: "/images/biblioteca.png", 
    link: "https://github.com/sabcriss/bibliotech", 
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
