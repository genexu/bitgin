import Head from 'next/head';
import Box from '@mui/material/Box';
import Layout from '@/components/Layout';
import Toolbox from './Toolbox';
import Workarea from './Workarea';
import Views from './Views';

const Draw = () => (
  <Layout fullwidth>
    <Head>
      <title>Bitgin | Draw</title>
    </Head>
    <Box sx={{ display: 'flex' }}>
      <Toolbox />
      <Workarea />
      <Views />
    </Box>
  </Layout>
);

export default Draw;
