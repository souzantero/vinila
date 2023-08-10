import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Skeleton,
} from "@chakra-ui/react";
import { Vinyl } from "../../../../core";
import { VinylTableRow } from "./VinylTableRow";

interface Props {
  vinyls: Vinyl[];
  isLoading: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  onShowVinyl: (vinyl: Vinyl) => void;
  onRemoveVinyl: (vinyl: Vinyl) => void;
}

export function VinylTable({
  vinyls,
  isLoading,
  isReadOnly,
  isDisabled,
  onShowVinyl,
  onRemoveVinyl,
}: Props) {
  if (isLoading) return <Skeleton height="20px" />;
  return (
    <TableContainer>
      <Table variant="striped" colorScheme={"facebook"} size="sm">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th isNumeric />
          </Tr>
        </Thead>
        <Tbody>
          {vinyls.map((vinyl) => (
            <VinylTableRow
              key={vinyl.id}
              vinyl={vinyl}
              isLoading={isLoading}
              isReadOnly={isReadOnly}
              isDisabled={isDisabled}
              onShow={() => onShowVinyl(vinyl)}
              onRemove={() => onRemoveVinyl(vinyl)}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
