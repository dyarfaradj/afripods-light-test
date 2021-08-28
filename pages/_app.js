import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import GlobalStyle from "../styles/globalStyles";
import { lightTheme } from "../styles/lightTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
