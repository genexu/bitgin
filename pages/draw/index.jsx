import Head from 'next/head';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Layout from '@/components/Layout';
import Toolbox from './Toolbox';
import Workarea from './Workarea';
import Views from './Views';
import DrawboxProvider from '@/containers/DrawboxProvider';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  height: 'calc(100vh - 64px)',
}));

const Draw = () => (
  <DrawboxProvider>
    <Layout fullwidth>
      <Head>
        <title>Bitgin | Draw</title>
      </Head>
      <StyledBox>
        <Toolbox />
        <Workarea />
        <Views />
      </StyledBox>
    </Layout>
  </DrawboxProvider>
);

export default Draw;
