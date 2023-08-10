import React from "react";
import { ButtonGroup, Td, Tr } from "@chakra-ui/react";
import { Vinyl } from "../../../../core";
import { NavButton } from "../layout";
import { If } from "../utils";
import { RemoveVinylButton } from "./RemoveVinylButton";

interface Props {
  vinyl: Vinyl;
  onShow: () => void;
  onRemove: () => void;
  isLoading?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
}

export function VinylTableRow({ vinyl, onShow, onRemove, ...rest }: Props) {
  const isLoading = rest.isLoading || false;
  const isReadOnly = rest.isReadOnly || false;
  const isDisabled = rest.isDisabled || false;

  return (
    <Tr>
      <Td>{vinyl.name}</Td>
      <Td isNumeric>
        <ButtonGroup>
          <NavButton onNavigate={onShow}>Abrir</NavButton>
          <If condition={!isReadOnly}>
            <RemoveVinylButton
              isRemoving={isLoading}
              onRemove={onRemove}
              isDisabled={isDisabled}
            />
          </If>
        </ButtonGroup>
      </Td>
    </Tr>
  );
}
