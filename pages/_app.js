import { ThemeProvider } from "styled-components";

import { Theme } from "../styles/Theme";
import { Global } from "../styles/Global";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { prefix } from "../utils/prefix";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <Container>
        <Navbar prefix={prefix} />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background-color: #67bc98;
  height: 100vh;
`;

export default MyApp;
