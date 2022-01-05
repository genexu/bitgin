import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('./Canvas'), {
  ssr: false,
});

const Workarea = () => (
  <Box
    sx={{
      display: 'flex',
      flex: 1,
      bgcolor: 'background.default',
    }}
  >
    <Canvas />
  </Box>
);

export default Workarea;
