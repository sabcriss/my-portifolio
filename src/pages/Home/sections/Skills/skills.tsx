import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
    return (
        <Container id="skills" sx={{ padding: "20px", marginTop: "20px" }} data-aos="fade-up">

            <div style={{ paddingLeft: "20px" }}>
                <Typography variant="h6">My top</Typography>
                <Typography variant="h2" fontWeight="bold">Skills</Typography>
            </div>

            <Grid container spacing={3} sx={{ marginTop: 3 }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1">
                        Atuo há alguns anos na área comercial, onde desenvolvi habilidades de comunicação, trabalho em equipe e foco em resultados. Atualmente, curso Engenharia de Software e venho me especializando em desenvolvimento Front-End.

                        Tenho conhecimentos em HTML, CSS, JavaScript, React e TypeScript, além de lógica de programação, estrutura de dados e linguagem C. Também utilizo o Figma para prototipação de interfaces, buscando unir design e desenvolvimento para criar experiências funcionais e intuitivas.

                        Sou uma pessoa curiosa, proativa e estou sempre em busca de novos aprendizados para evoluir como desenvolvedora.

                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography variant="body1">HTML</Typography>
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={80}
                        sx={{ height: 10, borderRadius: 5, marginBottom: 2 }}
                    />

                    <Typography variant="body1">CSS</Typography>
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={70}
                        sx={{ height: 10, borderRadius: 5, marginBottom: 2 }}
                    />

                    <Typography variant="body1">JavaScript</Typography>
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={70}
                        sx={{ height: 10, borderRadius: 5, marginBottom: 2 }}
                    />

                    <Typography variant="body1">TypeScript</Typography>
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={60}
                        sx={{ height: 10, borderRadius: 5, marginBottom: 2 }}
                    />

                    <Typography variant="body1">React</Typography>
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={85}
                        sx={{ height: 10, borderRadius: 5, marginBottom: 2 }}
                    />

                    <Typography variant="body1">Angular</Typography>
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={20}
                        sx={{ height: 10, borderRadius: 5, marginBottom: 2 }}
                    />

                    <Typography variant="body1">MySQL</Typography>
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={60}
                        sx={{ height: 10, borderRadius: 5, marginBottom: 2 }}
                    />

                    <Typography variant="body1">C</Typography>
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={77}
                        sx={{ height: 10, borderRadius: 5 }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Skills;
