import type { AppProps } from 'next/app';
import { theme } from '../style/theme';
import GlobalStyle from '../style/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const App = (prop: AppProps) => {
    const { Component, pageProps } = prop;
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
