import { Box, Typography } from '@mui/material';
import React from 'react';

const ColoredCircle = (props) => {
  return (
    <>
      <Box
        sx={{
          borderRadius: '40px',
          backgroundColor: '#e5a639',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '14px',
        }}>
        {props.children}
      </Box>
    </>
  );
};

export default ColoredCircle;
