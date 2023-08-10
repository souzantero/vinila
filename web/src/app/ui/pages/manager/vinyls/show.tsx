import React from 'react';
import { ButtonGroup, Skeleton } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { Role } from '../../../../../core';
import { If, NavButton, Page, PageBody, PageHeader, VinylInfo } from '../../..';
import { useVinyl, useAuthorization, useSignedUser } from '../../../../hooks';

export function VinylInfoPage() {
  const navigate = useNavigate();
  const { isSigned } = useSignedUser();
  const { isAuthorized } = useAuthorization(Role.Admin);
  const { vinylId } = useParams();
  const { isLoading, vinyl } = useVinyl(vinylId!);

  return (
    <Page>
      <PageHeader title={'Vinil'}>
        <ButtonGroup>
          <If condition={isSigned}>
            <NavButton
              onNavigate={() => navigate(`/manager/vinyls/${vinylId}/edit`)}
              isLoading={isLoading}
              isDisabled={!isAuthorized || isLoading || !vinyl}
            >
              Editar
            </NavButton>
          </If>
        </ButtonGroup>
      </PageHeader>
      <PageBody>
        {isLoading ? <Skeleton /> : <VinylInfo vinyl={vinyl!} />}
      </PageBody>
    </Page>
  );
}
