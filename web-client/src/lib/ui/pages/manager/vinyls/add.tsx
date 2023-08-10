import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Page, PageBody, PageHeader, VinylForm } from "../../..";
import { makeAddVinylRepository } from "../../../../factories";
import { useSignedUser, useNavigate } from "../../../../hooks";

export function AddVinylPage() {
  const notify = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { signedUser } = useSignedUser();
  const [name, setName] = useState<string>("");
  const [isAdding, setIsAdding] = useState(false);

  const addVinyl = async () => {
    try {
      setIsAdding(true);
      const repository = makeAddVinylRepository(
        signedUser!.authorizationToken!,
      );
      const vinyl = await repository.add({ name });
      setName("");

      notify({
        status: "success",
        title: "Vinil adicionado.",
        description: "Vinil adicionado com sucesso.",
      });

      queryClient.invalidateQueries(["vinyls"]);
      navigate("/manager/vinyls");

      return vinyl;
    } catch (error) {
      const status = "error";
      const title = "Falha ao adicionar vinil.";
      const description =
        error instanceof Error
          ? error.message
          : "Não foi possível adicionar o vinil no momento, tente novamente mais tarde.";

      notify({ status, title, description });
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Page>
      <PageHeader title="Adicionar vinil" />
      <PageBody>
        <VinylForm
          value={{ name }}
          onChange={(data) => setName(data.name)}
          onSubmit={addVinyl}
          isDisabled={isAdding}
          isLoading={isAdding}
        />
      </PageBody>
    </Page>
  );
}
