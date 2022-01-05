import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import Box from '@mui/material/Box';
import { DrawboxContext } from '@/containers/DrawboxProvider';

const Canvas = () => {
  const wrapperRef = useRef();
  const [sceneSize, setSceneSize] = useState([null, null]);
  const { state } = useContext(DrawboxContext);
  const { size } = state;

  useEffect(() => {
    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;
    setSceneSize([width, height]);
  }, []);

  const sceneIsReady = useMemo(() => {
    return Boolean(sceneSize[0] && sceneSize[1]);
  }, [sceneSize]);

  return (
    <Box sx={{ width: '100%' }} ref={wrapperRef}>
      {sceneIsReady && (
        <Stage width={sceneSize[0]} height={sceneSize[1]}>
          <Layer />
        </Stage>
      )}
    </Box>
  );
};

export default Canvas;
