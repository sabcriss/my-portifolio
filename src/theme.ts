import '@fontsource/poppins'; 
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#320866", // 
    },
    secondary: {
      main: "#7419E2", //
    },
    background: {
        default: "#E4E4E4", 
    },
    text: {
      primary: "#000000", 
    },
  },

  typography: {
    fontFamily: 'Poppins, sans-serif', 
  },
});

theme = responsiveFontSizes(theme);
export default theme;
