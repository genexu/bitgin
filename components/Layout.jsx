import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Bitgin</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <CssBaseline />
    <Box component="main">
      <Toolbar />
      {children}
    </Box>
    {/* <Footer /> */}
  </>
);

export default Layout;
