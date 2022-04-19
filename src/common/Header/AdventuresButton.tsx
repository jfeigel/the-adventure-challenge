import React, { MouseEvent, useContext, useState } from 'react';

import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Skeleton,
  Typography,
  alpha
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { capitalize } from 'lodash-es';
import { Link as RouterLink } from 'react-router-dom';

import { AuthContext, Editions } from 'Auth/AuthProvider';
import AddAdventuresDialog from 'common/Header/AddAdventuresDialog';

function AdventuresButton() {
  /**
   * State
   */
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const menuOpen = Boolean(anchorEl);

  /**
   * Context
   */
  const { loading, user } = useContext(AuthContext);

  return (
    <>
      <Button
        id="adventures-button"
        aria-controls={menuOpen ? 'adventures-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleMenuOpen}
        endIcon={menuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        sx={[
          menuOpen && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.text.primary,
                theme.palette.action.hoverOpacity
              )
          },
          { mr: 2 }
        ]}
      >
        Adventures
      </Button>
      <Menu
        id="adventures-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'adventures-button',
          sx: { pb: 0 }
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        sx={{
          '& .MuiPaper-root': {
            mt: 0.5
          },
          '& .MuiMenuItem-root': {
            px: 3,
            py: 1
          }
        }}
      >
        {!loading && (user?.editions ?? []).length === 0 ? (
          <Typography
            color="text.disabled"
            fontWeight="bold"
            variant="caption"
            sx={{
              m: (theme) => theme.spacing(1.5, 1, 2),
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            No Adventures Found
          </Typography>
        ) : null}
        {loading ? (
          <Box mb={1}>
            {Object.keys(Editions).map((edition) => (
              <Skeleton key={edition} height={40} width={136} sx={{ mx: 3 }} />
            ))}
          </Box>
        ) : (
          user?.editions?.map((edition) => (
            <MenuItem
              key={edition}
              component={RouterLink}
              to={`/adventures/${edition}`}
              onClick={handleMenuClose}
            >
              {capitalize(edition)}
            </MenuItem>
          ))
        )}
        {!loading &&
        Object.keys(Editions).length > (user?.editions?.length ?? 0) ? (
          <Box display="flex" flexDirection="column" bgcolor="grey.100" mt={1}>
            <Divider light />
            <Button
              variant="contained"
              disableElevation
              onClick={handleDialogOpen}
              sx={{ m: 1.5 }}
            >
              Add an Adventure
            </Button>
          </Box>
        ) : null}
      </Menu>
      <AddAdventuresDialog
        open={dialogOpen}
        hasSubmitted={hasSubmitted}
        setDialogOpen={setDialogOpen}
        setHasSubmitted={setHasSubmitted}
      />
    </>
  );

  /**
   * Event Handlers
   */
  function handleMenuOpen(event: MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function handleDialogOpen() {
    setHasSubmitted(false);
    setDialogOpen(true);
    handleMenuClose();
  }
}

export default AdventuresButton;
