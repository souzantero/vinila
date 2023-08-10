import React, { useState } from 'react';
import { ButtonGroup, useToast } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Role, Vinyl } from '../../../../../core';
import {
  If,
  NavButton,
  Page,
  PageBody,
  PageHeader,
  VinylTable,
} from '../../..';
import { makeRemoveVinylByIdRepository } from '../../../../factories';
import { useAuthorization, useVinyls, useSignedUser } from '../../../../hooks';

export function VinylsPage() {
  const notify = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { vinyls, isLoading } = useVinyls();
  const { signedUser } = useSignedUser();
  const { isSigned } = useSignedUser();
  const { isAuthorized } = useAuthorization(Role.Admin);

  const [isRemoving, setIsRemoving] = useState(false);

  const removeVinyl = async (vinyl: Vinyl) => {
    try {
      setIsRemoving(true);
      const repository = makeRemoveVinylByIdRepository(
        signedUser!.authorizationToken!,
      );

      await repository.removeById(vinyl.id);

      notify({
        status: 'success',
        title: 'Vinil removido.',
        description: 'Vinil removido com sucesso.',
      });

      queryClient.invalidateQueries(['vinyls']);

      return true;
    } catch (error) {
      const status = 'error';
      const title = 'Falha ao remover vinil.';
      const description =
        error instanceof Error
          ? error.message
          : 'Não foi possível remover o vinil no momento, tente novamente mais tarde.';
      notify({ status, title, description });
      return false;
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <Page>
      <PageHeader title="Vinis">
        <ButtonGroup>
          <If condition={isSigned}>
            <NavButton
              onNavigate={() => navigate('/manager/vinyls/new')}
              isDisabled={!isAuthorized}
            >
              Adicionar
            </NavButton>
          </If>
        </ButtonGroup>
      </PageHeader>
      <PageBody>
        <VinylTable
          vinyls={vinyls}
          isReadOnly={!isSigned}
          isDisabled={!isAuthorized}
          isLoading={isLoading || isRemoving}
          onShowVinyl={(vinyl) => navigate(`/manager/vinyls/${vinyl.id}`)}
          onRemoveVinyl={(vinyl) => removeVinyl(vinyl)}
        />
      </PageBody>
    </Page>
  );
}
