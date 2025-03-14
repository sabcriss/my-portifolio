import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/system"; // Certifique-se que importou o styled corretamente
import theme from "../../../../theme";

const NavBar: React.FC = () => {

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
    }));

    return (
        <AppBar position="relative">
            <StyledToolbar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Contact</MenuItem>
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;
