import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Vinyl as VinylModel } from "../../../../core";

function TextDisplay({ label, value }: { label: string; value?: string }) {
  return (
    <Flex>
      <Text fontWeight={"bold"}>{label}:</Text>
      <Box width={"10px"} />
      <Text>{value}</Text>
    </Flex>
  );
}

interface Props {
  vinyl: VinylModel;
}

export function VinylInfo({ vinyl }: Props) {
  return (
    <>
      <TextDisplay
        label="Código de identificação"
        value={vinyl.id.toString()}
      />
      <TextDisplay label="Nome" value={vinyl.name.toString()} />

      <TextDisplay label="Criado em" value={vinyl.createdAt.toLocaleString()} />
      {vinyl.updatedAt && (
        <TextDisplay
          label="Última atualização"
          value={vinyl.updatedAt.toLocaleString()}
        />
      )}
    </>
  );
}
