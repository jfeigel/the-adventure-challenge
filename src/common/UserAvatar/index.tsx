import React from 'react';

import { User } from '@auth0/auth0-react';
import { Avatar, SxProps, Theme } from '@mui/material';

type Props = {
  user?: User;
  sx?: SxProps<Theme>;
};

function UserAvatar(props: Props) {
  return (
    <Avatar
      src={props.user?.picture}
      alt={props.user?.name}
      imgProps={{
        referrerPolicy: 'no-referrer'
      }}
      sx={[
        ...(props.sx ? (Array.isArray(props.sx) ? props.sx : [props.sx]) : [])
      ]}
    >
      {props.user?.name
        ?.split(' ')
        .map((w: string) => w[0])
        .join('')}
    </Avatar>
  );
}

export default UserAvatar;
