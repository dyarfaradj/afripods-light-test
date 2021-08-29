import "styles/globals.css";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Navbar from "components/Navbar";
import GlobalStyle from "styles/globalStyles";
import { lightTheme } from "styles/lightTheme";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 56px;
  padding: 0 25px 0 25px;
  color: black;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Navbar />
      <Wrapper>
        <ListWrapper>
          <Component {...pageProps} />
        </ListWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default MyApp;
