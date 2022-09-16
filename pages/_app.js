import { createTheme, ThemeProvider } from '@mui/material';
import { cyan, green, orange ,red} from '@mui/material/colors';


import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const theme = createTheme({
    palette: {
      primary: {
        light: "#2AE3F7",
        main: "#00acc1",
        dark: "#12626B"
      },
      secondary: {
        main: "#FA7C2D",
      },
      error: {
        main: red[500],
      },
      warning: {
        main: orange[500],
      },
      info: {
        main: cyan[500],
      },
      success:{
        main: green[500]
      },
      cancel:{
        main: red[500],
      }
    },
  });
  

  return <ThemeProvider theme ={theme}> <Component {...pageProps} /></ThemeProvider>
}

export default MyApp
