import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ForgetUserPassword } from '../../ui';
import { makeForgetUserPasswordRepository } from '../../factories';

export function ForgetUserPasswordPage() {
  const navigate = useNavigate();
  const notify = useToast();
  const [email, setEmail] = useState('');
  const [isForgetting, setIsForgetting] = useState(false);

  const forget = async () => {
    try {
      setIsForgetting(true);

      const repository = makeForgetUserPasswordRepository();
      await repository.forgetUserPassword(email);

      setEmail('');

      notify({
        status: 'success',
        title: 'Senha esquecida.',
        description: 'Verifique sua caixa de entrada para ver as instruções.',
      });
    } catch (error) {
      const status = 'error';
      const title = 'Falha ao esquecer senha.';
      const description =
        error instanceof Error
          ? error.message
          : 'Não foi possível esquecer a senha no momento, tente novamente mais tarde.';
      notify({ status, title, description });
    } finally {
      setIsForgetting(false);
    }
  };

  return (
    <ForgetUserPassword
      email={email}
      onChangeEmail={setEmail}
      isForgetting={isForgetting}
      onForget={forget}
      onConfirmEmail={() => navigate(`/users/confirm-email?email=${email}`)}
      onSignIn={() => navigate('/auth/sign-in')}
    />
  );
}
