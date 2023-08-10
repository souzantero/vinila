import { GetStorage, RemoveStorage, SetStorage } from "../../core";

export class LocalStorageAdapter
  implements GetStorage, SetStorage, RemoveStorage
{
  get(key: string): object | null {
    const rawData = localStorage.getItem(key);
    if (!rawData) return null;
    return JSON.parse(rawData);
  }

  set(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
