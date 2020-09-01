import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore repositórios no Github</Title>

      <Form action=''>
        <input type='text' placeholder='Digite o nome do repositório' />
        <button type='submit'>Pesquisar</button>
      </Form>

      <Repositories>
        <a href='teste'>
          <img
            src='https://avatars0.githubusercontent.com/u/11333829?s=400&u=5ac09229e43715bb45e81eab1c4f002b133a4452&v=4'
            alt='Leonardo Ribeiro'
          />
          <div>
            <strong>leonardorib/proffy</strong>
            <p>Connecting students and teachers.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href='teste'>
          <img
            src='https://avatars0.githubusercontent.com/u/11333829?s=400&u=5ac09229e43715bb45e81eab1c4f002b133a4452&v=4'
            alt='Leonardo Ribeiro'
          />
          <div>
            <strong>leonardorib/proffy</strong>
            <p>Connecting students and teachers.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href='teste'>
          <img
            src='https://avatars0.githubusercontent.com/u/11333829?s=400&u=5ac09229e43715bb45e81eab1c4f002b133a4452&v=4'
            alt='Leonardo Ribeiro'
          />
          <div>
            <strong>leonardorib/proffy</strong>
            <p>Connecting students and teachers.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
