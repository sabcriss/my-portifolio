import { Button, Container, Grid, TextField, Typography, Box, Link } from "@mui/material";
import React from "react";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material"; 

const Contact = () => {
  // Estilo das caixas
  const boxStyle = {
    border: "1px solid gray",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto", 
    textAlign: "center", 
  };

  return (
    <Container id="contact" sx={{ padding: "20px", marginTop: "20px" }} data-aos="fade-up">
      <div style={{ textAlign: "center" }}>
        <Typography variant="h6">Entrar em contato</Typography>
        <Typography variant="h2" fontWeight="bold">Contact.</Typography>
      </div>
      <Grid container spacing={3} sx={{ marginTop: 3, justifyContent: "center" }}>
        <Grid item xs={12} md={6}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box sx={boxStyle}>
              <Typography variant="h6" fontWeight="bold">Email</Typography>
              <Typography variant="body1">sabrycris.sc@gmail.com</Typography>
              <Link href="mailto:sabrycris.sc@gmail.com" target="_blank" underline="none" color="primary">
                Enviar mensagem
              </Link>
            </Box>
            <Box sx={boxStyle}>
              <Typography variant="h6" fontWeight="bold">LinkedIn</Typography>
              <Typography variant="body1">Sabrycris</Typography>
              <Link href="https://www.linkedin.com/in/sabrycris/" target="_blank" underline="none" color="primary">
                Enviar mensagem
              </Link>
            </Box>
            <Box sx={boxStyle}>
              <Typography variant="h6" fontWeight="bold">GitHub</Typography>
              <Typography variant="body1">Sabcriss</Typography>
              <Link href="https://github.com/sabcriss" target="_blank" underline="none" color="primary">
                Enviar mensagem
              </Link>
            </Box>
          </div>
        </Grid>

        {/* Segunda coluna (formulário de contato) */}
        <Grid item xs={12} md={6}>
          <Box sx={boxStyle}>
            <Typography variant="h6" fontWeight="bold">Nome Completo</Typography>
            <TextField fullWidth label="Digite seu nome" variant="outlined" sx={{ marginBottom: "10px" }} />
            <Typography variant="h6" fontWeight="bold">E-mail</Typography>
            <TextField fullWidth label="Digite seu e-mail" variant="outlined" sx={{ marginBottom: "10px" }} />
            <Typography variant="h6" fontWeight="bold">Mensagem</Typography>
            <TextField
              fullWidth
              label="Escreva sua mensagem"
              variant="outlined"
              multiline
              rows={4}
              sx={{ marginBottom: "10px" }}
            />
            <Button fullWidth variant="contained" color="primary">Enviar mensagem</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
