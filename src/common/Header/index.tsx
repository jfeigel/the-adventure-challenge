import React from 'react';

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import WcIcon from '@mui/icons-material/Wc';

import logo from 'images/logo48.png';
import AccountButton from './AccountButton';

function Header() {
  return (
    <Box bgcolor="common.white">
      <AppBar position="static" color="inherit">
        <Container maxWidth="xl" disableGutters>
          <Toolbar>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: { xs: 0, md: 1 }
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Adventure Challenge logo"
                sx={{ maxHeight: 40 }}
              />
              <Typography
                variant="h6"
                sx={{ mx: 2, display: { xs: 'none', md: 'block' } }}
              >
                The Adventure Challenge Tracker
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexGrow: { xs: 1, md: 0 },
                justifyContent: 'center'
              }}
            >
              {/* Couples Button */}
              <Button
                color="couples"
                sx={{ mr: 2, display: { xs: 'none', md: 'inline-flex' } }}
              >
                Couples
              </Button>
              <IconButton sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
                <WcIcon />
              </IconButton>
              {/* /Couples Button */}
              {/* Family Button */}
              <Button
                color="family"
                sx={{ mr: 2, display: { xs: 'none', md: 'inline-flex' } }}
              >
                Family
              </Button>
              <IconButton sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
                <FamilyRestroomIcon />
              </IconButton>
              {/* /Family Button */}
            </Box>
            <AccountButton />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
