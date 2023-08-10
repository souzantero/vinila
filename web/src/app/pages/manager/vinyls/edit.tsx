import React, { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Page, PageBody, PageHeader, VinylForm } from '../../../ui';
import { makeUpdateVinylByIdRepository } from '../../../factories';
import { useSignedUser } from '../../../hooks';
import { useVinyl } from '../../../hooks/useVinyl';

export function EditVinylPage() {
  const notify = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { vinylId } = useParams();
  const { signedUser } = useSignedUser();
  const { vinyl, isLoading } = useVinyl(vinylId!);

  const [name, setName] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState(false);

  const updateVinyl = async () => {
    try {
      setIsUpdating(true);
      const repository = makeUpdateVinylByIdRepository(
        signedUser!.authorizationToken!,
      );
      const updatedVinyl = await repository.updateById(vinylId!, {
        name,
      });
      setName('');

      notify({
        status: 'success',
        title: 'Vinil atualizado.',
        description: 'Vinil atualizado com sucesso.',
      });

      queryClient.invalidateQueries(['vinyls']);
      navigate('/manager/vinyls');
      return updatedVinyl;
    } catch (error) {
      const status = 'error';
      const title = 'Falha ao atualizar vinil.';
      const description =
        error instanceof Error
          ? error.message
          : 'Não foi possível atualizar o vinil no momento, tente novamente mais tarde.';
      notify({ status, title, description });
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (vinyl) {
      setName(vinyl.name);
    }
  }, [vinyl]);

  return (
    <Page>
      <PageHeader title="Editar vinil" />
      <PageBody>
        <VinylForm
          value={{ name }}
          onChange={(data) => setName(data.name)}
          onSubmit={updateVinyl}
          isDisabled={isLoading || isUpdating}
          isLoading={isLoading || isUpdating}
          buttonText="Salvar"
          buttonLoadingText="Salvando..."
        />
      </PageBody>
    </Page>
  );
}
