import React, { ChangeEvent, useContext, useMemo, useState } from 'react';

import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText
} from '@mui/material';
import { capitalize, difference, noop } from 'lodash-es';

import { AuthContext, Editions } from 'Auth/AuthProvider';
import Loader from 'common/Loader';
import { getTypedKeys } from 'utils/getTypedKeys';

type Adventures = {
  [Editions.COUPLES]: boolean;
  [Editions.FAMILY]: boolean;
};

type Props = {
  hasSubmitted: boolean;
  open: boolean;
  setDialogOpen: (val: boolean) => void;
  setHasSubmitted: (val: boolean) => void;
};

const initialAdventures = {
  couples: false,
  family: false
};

function AddAdventuresDialog({
  hasSubmitted,
  open,
  setDialogOpen,
  setHasSubmitted
}: Props) {
  /**
   * State
   */
  const [adventures, setAdventures] = useState<Adventures>(initialAdventures);
  const [loading, setLoading] = useState(false);

  /**
   * Context
   */
  const { user } = useContext(AuthContext);

  /**
   * Memo
   */
  const hasError = useMemo(hasErrorMemo, [adventures, hasSubmitted]);

  return (
    <Dialog open={open} onClose={loading ? noop : handleDialogClose}>
      {loading ? <Loader backdrop /> : null}
      <DialogTitle>Add an Adventure</DialogTitle>
      <DialogContent sx={{ pb: 1 }}>
        <DialogContentText sx={{ mb: 2 }}>
          Choose one or more adventures below:
        </DialogContentText>
        <FormControl error={hasError} component="fieldset" variant="standard">
          <FormGroup>
            {getTypedKeys(adventures).map((adventure) => (
              <FormControlLabel
                key={adventure}
                control={
                  <Checkbox
                    checked={adventures[adventure]}
                    onChange={handleAdventuresChange}
                    name={adventure}
                  />
                }
                label={capitalize(adventure)}
              />
            ))}
          </FormGroup>
          <FormHelperText>
            {hasError ? 'You must select an Adventure' : ' '}
          </FormHelperText>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleDialogClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={handleAddAdventure}
        >
          Add Adventure
        </Button>
      </DialogActions>
    </Dialog>
  );

  /**
   * Event Handlers
   */
  function handleAdventuresChange(event: ChangeEvent<HTMLInputElement>) {
    setHasSubmitted(false);
    setAdventures({
      ...adventures,
      [event.target.name]: event.target.checked
    });
  }

  async function handleAddAdventure() {
    setHasSubmitted(true);
    await new Promise((res) => setTimeout(res, 0));

    if (!hasError) {
      setLoading(true);

      try {
        await fetch(`${process.env.REACT_APP_API_URL}/adventures`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            editions: difference(getTypedKeys(adventures)).filter(
              (edition) => adventures[edition]
            ),
            userId: user?._id
          })
        });
      } catch (e) {
        console.error((e as Error).message);
      } finally {
        setLoading(false);
      }
    }

    handleDialogClose();
  }

  function handleDialogClose() {
    setDialogOpen(false);
    setAdventures(initialAdventures);
  }

  /**
   * Memo defs
   */
  function hasErrorMemo() {
    return (
      hasSubmitted &&
      difference(getTypedKeys(adventures)).filter((e) => adventures[e])
        .length === 0
    );
  }
}

export default AddAdventuresDialog;
