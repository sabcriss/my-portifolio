import { Button, Container, Grid, TextField, Typography, Box, Link } from "@mui/material";
import React, { useState } from "react";

const Contact = () => {
  // Estados para capturar os dados dos inputs do Material-UI
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Armazena mensagens de sucesso ou erro

  // Função que envia os dados para o seu endpoint do Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples antes de enviar
    if (!name || !email || !message) {
      setStatus("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xdarlvjn", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso! Logo entrarei em contato.");
        // Limpa os campos do formulário
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Ocorreu um erro ao enviar. Por favor, tente novamente.");
      }
    } catch (error) {
      setStatus("Erro de conexão. Verifique sua internet.");
    }
  };

  const boxStyle = {
    border: "1px solid gray",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto", 
    textAlign: "center" as const, 
  };

  return (
    <Container id="contact" sx={{ padding: "20px", marginTop: "20px" }} data-aos="fade-up">
      <div style={{ textAlign: "center" }}>
        <Typography variant="h6">Entrar em contato</Typography>
        <Typography variant="h2" fontWeight="bold">Contact.</Typography>
      </div>
      <Grid container spacing={3} sx={{ marginTop: 3, justifyContent: "center" }}>
        
        {/* Coluna da esquerda: Links Diretos */}
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

        {/* Coluna da direita: Formulário de Contato Inteligente */}
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit} sx={boxStyle}>
            <Typography variant="h6" fontWeight="bold">Nome Completo</Typography>
            <TextField 
              fullWidth 
              label="Digite seu nome" 
              variant="outlined" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: "10px" }} 
            />
            
            <Typography variant="h6" fontWeight="bold">E-mail</Typography>
            <TextField 
              fullWidth 
              label="Digite seu e-mail" 
              variant="outlined" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: "10px" }} 
            />
            
            <Typography variant="h6" fontWeight="bold">Mensagem</Typography>
            <TextField
              fullWidth
              label="Escreva sua mensagem"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ marginBottom: "10px" }}
            />
            
            {/* Feedback Visual de Sucesso ou Erro */}
            {status && (
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 2, 
                  color: status.includes("sucesso") ? "green" : "red", 
                  fontWeight: "bold" 
                }}
              >
                {status}
              </Typography>
            )}

            <Button type="submit" fullWidth variant="contained" color="primary">
              Enviar mensagem
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;