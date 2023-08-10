import React, { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

export function Page({ children }: PropsWithChildren) {
  return <Box padding={2}>{children}</Box>;
}
