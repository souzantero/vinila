import { GetStorage, RemoveStorage, SetStorage } from '../../core';

export class SessionStorageAdapter
  implements GetStorage, SetStorage, RemoveStorage
{
  get(key: string): object | null {
    const rawData = sessionStorage.getItem(key);
    if (!rawData) return null;
    return JSON.parse(rawData);
  }

  set(key: string, value: object): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
