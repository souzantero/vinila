import { useMemo } from "react";
import { Role } from "../../core";
import { useSignedUser } from "./useSignedUser";

export function useAuthorization(...roles: Role[]): {
  isAuthorized: boolean;
} {
  const { signedUser } = useSignedUser();
  const isAuthorized = useMemo(
    () => roles.some((role) => role === signedUser?.role),
    [roles, signedUser],
  );

  return { isAuthorized };
}
