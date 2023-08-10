import { useToast } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Vinyl } from "../../core";
import { makeLoadVinylByIdRepository } from "../factories";

export function useVinyl(vinylId: string): {
  vinyl?: Vinyl;
  isLoading: boolean;
} {
  const notify = useToast();
  const repository = makeLoadVinylByIdRepository();
  const {
    data: vinyl,
    isLoading,
    error,
  } = useQuery([`vinyls/${vinylId}`], () => repository.loadOneById(vinylId), {
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (error) {
      const description = error instanceof Error ? error.message : "";

      notify({
        status: "error",
        title: "Falha ao buscar o vinil.",
        description,
      });
    }
  }, [error]);

  return { vinyl, isLoading };
}
