import Head from 'next/head';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(0),
}));

const Layout = ({ children, fullwidth = false }) => (
  <>
    <Head>
      <title>Bitgin</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <CssBaseline />
    <StyledContainer component="main" maxWidth={fullwidth ? false : 'lg'}>
      <Toolbar />
      {children}
    </StyledContainer>
    {/* <Footer /> */}
  </>
);

export default Layout;
