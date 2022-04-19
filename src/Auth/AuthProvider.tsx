import React, { ReactNode, createContext, useEffect, useState } from 'react';

import { User as Auth0User, useAuth0 } from '@auth0/auth0-react';
import { isEqual, noop, pick } from 'lodash-es';
import { ObjectId } from 'mongodb';

import { usePrevState } from 'utils/usePrevState';

export type Identity = {
  connection: string;
  isSocial: boolean;
  provider: string;
  user_id: number;
};

export enum Editions {
  COUPLES = 'couples',
  FAMILY = 'family'
}

type User = Auth0User & {
  identities?: Identity[];
  editions?: Editions[];
  id?: ObjectId;
};

export type AuthContextType = {
  auth0User?: Auth0User;
  loading: boolean;
  setUser: (_: User) => void;
  user?: User;
};

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  loading: false,
  setUser: noop
});

function AuthProvider({ children }: Props) {
  /**
   * Hooks
   */
  const { getAccessTokenSilently, isLoading, user: auth0User } = useAuth0();

  /**
   * State
   */
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [user, setUser] = useState<User>();

  const prevAuth0User = usePrevState(auth0User);
  const prevUser = usePrevState(user);

  /**
   * Effect
   */
  useEffect(getMetaData, [
    auth0User,
    getAccessTokenSilently,
    prevAuth0User,
    prevUser,
    user
  ]);
  useEffect(updateUser, [prevUser, updating, user]);

  return (
    <AuthContext.Provider
      value={{
        auth0User,
        loading: loading && isLoading,
        setUser,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );

  /**
   * Effect defs
   */
  function getMetaData() {
    if (
      (!prevAuth0User && auth0User) ||
      (auth0User &&
        prevAuth0User &&
        !isEqual(prevAuth0User?.sub, auth0User.sub))
    ) {
      (async () => {
        if (!auth0User?.sub) return false;

        setLoading(true);

        try {
          const accessToken = await getAccessTokenSilently();

          const userDetailsByIdUrl = `${process.env.REACT_APP_AUTH0_AUDIENCE}users/${auth0User?.sub}`;

          const res = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });

          const data = await res.json();

          setUser({
            ...user,
            ...data
          });
        } catch (e) {
          console.error((e as Error).message);
        } finally {
          setLoading(false);
        }
      })();
    }
  }

  function updateUser() {
    if (!updating && user && !isEqual(prevUser, user)) {
      setUpdating(true);

      fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pick(user, ['name', 'email', 'identities']))
      })
        .then(async (res) => {
          const data = await res.json();
          setUser({
            ...user,
            ...data
          });
        })
        .catch(console.error)
        .finally(() => setUpdating(false));
    }
  }
}

export default AuthProvider;
