import React from 'react';
import { FiArrowLeft, FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt='GoBarber' />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name='name' icon={FiUser} type='text' placeholder='Nome' />
          <Input name='email' icon={FiMail} type='text' placeholder='E-mail' />
          <Input
            name='password'
            icon={FiLock}
            type='password'
            placeholder='Senha'
          />
          <Button type='submit'>Cadastrar</Button>
        </Form>
        <a href='signup'>
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;