import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../../../theme";

const NavBar: React.FC = () => {

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        padding: theme.spacing(1), 
    }));

    return (
        <AppBar position="fixed">
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
