import { Container, Grid, Typography, Link, Box } from "@mui/material";
import React from "react";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
    const theme = useTheme();
    return (
        <div style={{ backgroundColor: theme.palette.primary.main, padding: "20px 0" }}>
            <Container>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" align="center" gutterBottom color="white">
                            Entre em contato
                        </Typography>
                        <Link href="mailto:sabrycris.sc@gmail.com" color="white" underline="none">
                            <Typography variant="body1" align="center" color="white">
                                <MailOutline /> sabrycris.sc@gmail.com
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" align="center" gutterBottom color="white">
                            Redes sociais
                        </Typography>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <Link href="https://github.com/sabcriss" color="inherit" target="_blank" underline="none">
                                    <GitHub fontSize="large" style={{ color: "white" }} />
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="https://www.linkedin.com/in/sabrycris/" color="inherit" target="_blank" underline="none">
                                    <LinkedIn fontSize="large" style={{ color: "white" }} />
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body2" align="center" sx={{ marginTop: "20px" }} color="white">
                            &copy; {new Date().getFullYear()} Sabrina Cristina. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;
