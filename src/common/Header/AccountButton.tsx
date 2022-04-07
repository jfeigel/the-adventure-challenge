import React, { MouseEvent, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Skeleton,
  SvgIcon
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import UserAvatar from 'common/UserAvatar';
import { ReactComponent as Auth0Icon } from 'images/auth0.svg';

function AccountButton() {
  /**
   * Hooks
   */
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } =
    useAuth0();

  /**
   * State
   */
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  if (isLoading) return <Skeleton variant="circular" height={40} width={40} />;

  return !isAuthenticated ? (
    <Button
      variant="contained"
      endIcon={<SvgIcon component={Auth0Icon} inheritViewBox />}
      aria-label="account login"
      onClick={loginWithRedirect}
    >
      Sign In
    </Button>
  ) : (
    <>
      <IconButton
        id="account-button"
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <UserAvatar user={user} />
      </IconButton>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'account-button'
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          '& .MuiMenuItem-root': {
            px: 3,
            py: 1
          }
        }}
      >
        <MenuItem component={RouterLink} to="/profile" onClick={handleClose}>
          My Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            logout();
            handleClose();
          }}
        >
          Sign Out
        </MenuItem>
      </Menu>
    </>
  );

  /**
   * Callbacks
   */
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
}

export default AccountButton;
