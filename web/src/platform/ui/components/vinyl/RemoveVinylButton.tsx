import React from 'react';
import { CautionButton, CautionButtonProps } from '../layout';

interface Props extends Partial<CautionButtonProps> {
  isRemoving: boolean;
  onRemove: () => void;
}

export function RemoveVinylButton({ isRemoving, onRemove, ...rest }: Props) {
  return (
    <CautionButton
      {...rest}
      cautionMessage="Você tem certeza que deseja remover este vinil?"
      isLoading={isRemoving}
      onConfirm={onRemove}
    >
      Remover
    </CautionButton>
  );
}
