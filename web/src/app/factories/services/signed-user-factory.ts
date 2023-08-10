import { SignedUser } from '../../../core';
import {
  LocalStorageAdapter,
  SessionStorageAdapter,
  Storage,
} from '../../cache';

export const makeSignedUser = (remind = false) => {
  const localStorage = new LocalStorageAdapter();
  const sessionStorage = new SessionStorageAdapter();
  const storage = new Storage(localStorage, sessionStorage);
  return new SignedUser(
    storage,
    remind ? localStorage : sessionStorage,
    storage,
  );
};
