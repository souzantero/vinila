import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Role } from '../core';
import { If, UnauthorizedUser, UnsignedUser } from './ui';

import {
  AddVinylPage,
  ConfirmUserEmailPage,
  EditVinylPage,
  ForgetUserPasswordPage,
  ResetUserPasswordPage,
  SignUpPage,
  SignInPage,
  VinylInfoPage,
  VinylsPage,
} from './ui';

import { Manager, Store } from './components';
import { useAuthorization, useSignedUser } from './hooks';

export function Routing() {
  const navigate = useNavigate();
  const { isSigned } = useSignedUser();
  const { isAuthorized } = useAuthorization(Role.Admin);

  return (
    <Routes>
      <Route path="auth">
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
      <Route path="users">
        <Route path="confirm-email" element={<ConfirmUserEmailPage />} />
        <Route path="forget-password" element={<ForgetUserPasswordPage />} />
        <Route path="reset-password" element={<ResetUserPasswordPage />} />
      </Route>
      <Route path="manager" element={<Manager />}>
        <Route path="vinyls">
          <Route index element={<VinylsPage />} />
          <Route
            path="new"
            element={
              <If
                condition={isSigned}
                or={<UnsignedUser onSignIn={() => navigate('/auth/sign-in')} />}
              >
                <If condition={isAuthorized} or={<UnauthorizedUser />}>
                  <AddVinylPage />
                </If>
              </If>
            }
          />
          <Route path=":vinylId">
            <Route index element={<VinylInfoPage />} />
            <Route
              path="edit"
              element={
                <If
                  condition={isSigned}
                  or={
                    <UnsignedUser onSignIn={() => navigate('/auth/sign-in')} />
                  }
                >
                  <If condition={isAuthorized} or={<UnauthorizedUser />}>
                    <EditVinylPage />
                  </If>
                </If>
              }
            />
          </Route>
        </Route>
      </Route>
      <Route path="/" element={<Store />} />
    </Routes>
  );
}
