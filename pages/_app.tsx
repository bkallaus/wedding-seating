import '../styles/globals.css'
import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: { Component: any; emotionCache?: EmotionCache | undefined; pageProps: any; }) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return  <CacheProvider value={emotionCache}>
  <Head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
  </Head>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
</CacheProvider>
}

export default MyApp
