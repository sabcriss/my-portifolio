import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/material";

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
      <div>
        <Typography variant="h6">EXPERIENCE E EDUCATION</Typography>
        <Typography variant="h2" fontWeight="bold">My Resume</Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
        <Grid container item xs={5}>
          <div style={{ width: '100%' }}>
            <Typography variant="h6" fontWeight="bold">Experience</Typography>
            <hr />
          </div>
          <Grid item xs={12} style={{ gap: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px" }}>  
              <div>
                <Typography variant="h6" fontWeight="bold">Analista comercial PL</Typography>
                <Typography sx={{ fontSize: "13px" }}>Atendimento a clientes B2B</Typography>
              </div>

              <StyledBox sx={{ maxWidth: "100px" }}>
                <Typography sx={{ fontSize: "10px" }}>2024 - 2025</Typography>
              </StyledBox>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px"}}>
              <div>
                <Typography variant="h6" fontWeight="bold">Representante serviços bancários</Typography>
                <Typography sx={{ fontSize: "13px" }}>Atendimento a servidores públicos na utilização de serviços bancários</Typography>
              </div>
              <StyledBox sx={{ maxWidth: "100px" }}>
                <Typography sx={{ fontSize: "10px" }}>2022 - 2023</Typography>
              </StyledBox>
            </div>
          </Grid>
        </Grid>

        {/* Segunda parte - Education */}
        <Grid container item xs={5}>
          <div style={{ width: '100%' }}>
            <Typography variant="h6" fontWeight="bold">Education</Typography>
            <hr />
          </div>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px" }}>
              <div>
                <Typography variant="h6" fontWeight="bold">Universidade Católica de Brasília</Typography>
                <Typography sx={{ fontSize: "13px" }}>Engenharia de Software</Typography>
              </div>
              <StyledBox sx={{ maxWidth: "100px" }}>
                <Typography sx={{ fontSize: "10px" }}>2024 - 2025</Typography>
              </StyledBox>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px" }}>
              <div>
                <Typography variant="h6" fontWeight="bold">UDF Brasília</Typography>
                <Typography sx={{ fontSize: "13px" }}>Engenharia Mecatrônica</Typography>
              </div>
              <StyledBox sx={{ maxWidth: "100px" }}>
                <Typography sx={{ fontSize: "10px" }}>2021 - 2023</Typography>
              </StyledBox>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container >
  );
};

export default Skills;
