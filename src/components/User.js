import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';

export default function User() {
  const [name, setName] = useState('Stranger');
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography sx={{ mr: 2 }}>Hello, {name}!</Typography>
          <Avatar
            sx={{ mr: 'auto' }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Button variant="contained" type="button">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
