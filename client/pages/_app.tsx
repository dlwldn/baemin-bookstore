import type { AppProps } from 'next/app';
import theme from 'style/theme';
import 'antd/dist/antd.css';
import GlobalStyle from '../style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from 'store';
import { useEffect, useState } from 'react';

const App = (prop: AppProps) => {
    const { Component, pageProps } = prop;
    const [showChild, setShowChild] = useState(false);

    useEffect(()=> {
        setShowChild(true)
    }, [])

    if(!showChild) return null;

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <GlobalStyle />
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    );
};

export default App;
