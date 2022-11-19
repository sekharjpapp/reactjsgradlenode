import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Formfield() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  label="Outlined" variant="outlined" />
      <TextField  label="Outlined" variant="outlined" />
      <Button variant="contained">Add Student</Button>
    </Box>
  );
}