import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 500,
  height: 300,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Float() {
  return (

    <Stack direction="row" spacing={2}>
      <DemoPaper variant="elevation">default variant</DemoPaper>
      
    </Stack>
  );
}