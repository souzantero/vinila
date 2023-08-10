import React from "react";
import { Header as HeaderComponent, UserMenu } from "../ui";
import { useSignedUser, useSignOut, useNavigate } from "../hooks";

export function Header({ onOpen }: { onOpen: () => void }) {
  const navigate = useNavigate();
  const { signedUser, isLoading } = useSignedUser();
  const { signOut, isSigningOut } = useSignOut({
    onSignedOut() {
      window.location.reload();
    },
  });

  return (
    <HeaderComponent
      onOpen={onOpen}
      userMenu={
        <UserMenu
          user={signedUser || undefined}
          isLoading={isLoading || isSigningOut}
          onConfirmEmail={() =>
            navigate(`/users/confirm-email?email=${signedUser?.email}`)
          }
          onSignIn={() => navigate("/auth/sign-in")}
          onSignOut={signOut}
        />
      }
    />
  );
}
