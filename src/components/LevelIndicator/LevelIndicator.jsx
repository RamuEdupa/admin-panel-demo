import React from 'react';
import { LinearProgress, Box } from '@mui/material';

function LevelIndicator(props) {
  const level = parseInt(props.level);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column-reverse', height: 100 }}>
      <LinearProgress
        variant='determinate'
        value={level}
        sx={{
          height: '100%',
          transform: 'rotate(-90deg)',
          transformOrigin: 'top',
          borderRadius: '25px',
          top: '-83px',
          right: '23px',
        }}
      />
      <p style={{ alignSelf: 'center' }}>Level: {level}</p>
    </Box>
  );
}

export default LevelIndicator;
