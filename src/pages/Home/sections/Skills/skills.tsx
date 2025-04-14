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
                        Atuo há alguns anos na área comercial, o que me proporcionou uma excelente comunicação, facilidade para trabalhar em equipe e foco em resultados. Tenho facilidade em lidar com pessoas e me adaptar a diferentes contextos, habilidades que carrego comigo também na área de tecnologia.

                        Como estudante de Engenharia de Software (3º semestre), estou construindo uma base sólida em lógica de programação, estrutura de dados e algoritmos, com bastante prática em linguagem C. Tenho interesse especial pelo desenvolvimento Front-End, onde já possuo bons conhecimentos em HTML e CSS, e estou me aprofundando em JavaScript, React e TypeScript. Além disso, tenho experiência com prototipação de interfaces no Figma, o que me ajuda a unir design e código de forma estratégica.

                        Sou curiosa, proativa e estou sempre buscando aprender mais para evoluir como desenvolvedora.
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography variant="body1">HTML</Typography>
                    <LinearProgress variant="determinate" color="secondary" value={80} sx={{ height: 10, borderRadius: 5, marginBottom: 2 }} />

                    <Typography variant="body1">CSS</Typography>
                    <LinearProgress variant="determinate" color="secondary" value={70} sx={{ height: 10, borderRadius: 5, marginBottom: 2 }} />

                    <Typography variant="body1">JavaScript</Typography>
                    <LinearProgress variant="determinate" color="secondary" value={65} sx={{ height: 10, borderRadius: 5, marginBottom: 2 }} />

                    <Typography variant="body1">TypeScript</Typography>
                    <LinearProgress variant="determinate" color="secondary" value={50} sx={{ height: 10, borderRadius: 5, marginBottom: 2 }} />

                    <Typography variant="body1">React</Typography>
                    <LinearProgress variant="determinate" color="secondary" value={50} sx={{ height: 10, borderRadius: 5, marginBottom: 2 }} />

                    <Typography variant="body1">C</Typography>
                    <LinearProgress variant="determinate" color="secondary" value={77} sx={{ height: 10, borderRadius: 5 }} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Skills;
