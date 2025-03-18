import React from "react";
import { Container, Typography, Grid, Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)({
  border: "1px solid black",
  padding: "2px 5px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "150px",
  height: "30px",
  margin: "10px 0",
});

const Skills = () => {
  return (
    <Container sx={{ padding: "20px" }}>
      {/* Título principal */}
      <Typography
        variant="h6"
        sx={{
          textAlign: { xs: "center", md: "left" }, // Centralizado no mobile, alinhado à esquerda no desktop
          marginBottom: "10px",
        }}
      >
        EXPERIENCE E EDUCATION
      </Typography>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          textAlign: { xs: "center", md: "left" }, // Centralizado no mobile, alinhado à esquerda no desktop
          marginBottom: "40px",
        }}
      >
        My Resume
      </Typography>

      {/* Container principal responsivo */}
      <Grid container spacing={4}>
        {/* Seção de Experiência */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" align="center" sx={{ marginBottom: "20px" }}>Experience</Typography>
          <Divider sx={{ marginBottom: "20px" }} />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight="bold">Executiva de vendas PL</Typography>
            <Typography sx={{ fontSize: "15px", marginBottom: "10px" }}>Atendimento a clientes B2B</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <StyledBox>
                <Typography sx={{ fontSize: "10px" }}>2024 - 2025</Typography>
              </StyledBox>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Typography variant="h6" fontWeight="bold">Representante serviços bancários</Typography>
            <Typography sx={{ fontSize: "15px", marginBottom: "10px" }}>Atendimento a clientes B2B</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <StyledBox>
                <Typography sx={{ fontSize: "10px" }}>2023 - 2025</Typography>
              </StyledBox>
            </Box>
          </Box>
        </Grid>

        {/* Seção de Educação */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" align="center" sx={{ marginBottom: "20px" }}>Education</Typography>
          <Divider sx={{ marginBottom: "20px" }} />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight="bold">Universidade Católica de Brasília</Typography>
            <Typography sx={{ fontSize: "15px", marginBottom: "10px" }}>Engenharia de Software</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <StyledBox>
                <Typography sx={{ fontSize: "10px" }}>2024</Typography>
              </StyledBox>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Typography variant="h6" fontWeight="bold">UDF Brasília</Typography>
            <Typography sx={{ fontSize: "15px", marginBottom: "10px" }}>Engenharia Mecatrônica</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <StyledBox>
                <Typography sx={{ fontSize: "10px" }}>2022</Typography>
              </StyledBox>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;