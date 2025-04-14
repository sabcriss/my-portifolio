import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, MenuItem, Container, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { Home, School, Work, Email, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-scroll";


const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    boxShadow: "none",
  }));

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1, 4),
  }));

  const drawerList = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        <ListItem component={Link} to="about" smooth={true} duration={500}>
          <Home />
          <ListItemText primary="About" />
        </ListItem>
        <ListItem component={Link} to="skills" smooth={true} duration={500}>
          <School />
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem component={Link} to="projects" smooth={true} duration={500}>
          <Work />
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem component={Link} to="contact" smooth={true} duration={500}>
          <Email />
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Container>
          <StyledToolbar>
            <Typography variant="h6" color="inherit" sx={{ fontWeight: "bold" }}>
              Portifolio Dev
            </Typography>
            {!isMobile && (
              <Box display="flex" alignItems="center" gap={3}>
                <MenuItem component={Link} to="about" smooth={true} duration={500}>
                  <IconButton color="inherit">
                    <Home />
                  </IconButton>
                  About
                </MenuItem>
                <MenuItem component={Link} to="skills" smooth={true} duration={500}>
                  <IconButton color="inherit">
                    <School />
                  </IconButton>
                  Skills
                </MenuItem>
                <MenuItem component={Link} to="projects" smooth={true} duration={500}>
                  <IconButton color="inherit">
                    <Work />
                  </IconButton>
                  Projects
                </MenuItem>
                <MenuItem component={Link} to="contact" smooth={true} duration={500}>
                  <IconButton color="inherit">
                    <Email />
                  </IconButton>
                  Contact
                </MenuItem>
              </Box>
            )}
            {isMobile && (
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
          </StyledToolbar>
        </Container>
      </StyledAppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default NavBar;
