import React from "react";
import { Box, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Header } from "./Header";

export function Store({ children }: { children: React.ReactNode }) {
  const { onOpen } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" as="main">
        {children}
      </Box>
    </Box>
  );
}
