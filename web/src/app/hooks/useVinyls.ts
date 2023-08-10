import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { makeLoadVinylsRepository } from '../factories';

export function useVinyls() {
  const notify = useToast();
  const repository = makeLoadVinylsRepository();

  const { data, isLoading, error } = useQuery(
    ['vinyls'],
    () => repository.loadAll(),
    {
      refetchOnWindowFocus: true,
    },
  );

  const vinyls = data || [];

  useEffect(() => {
    if (error) {
      const description = error instanceof Error ? error.message : '';

      notify({
        status: 'error',
        title: 'Falha ao buscar vinis.',
        description,
      });
    }
  }, [error]);

  return { isLoading, vinyls, error };
}
