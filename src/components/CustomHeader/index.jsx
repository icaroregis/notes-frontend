import React from 'react';
import { Header, Profile, Logout } from './style';
import { RiShutDownLine } from 'react-icons/ri';

export default function CustomHeader() {
  return (
    <Header>
      <Profile>
        <img src="https://github.com/icaroregis.png" alt="Foto do usuário" />

        <div>
          <span>Bem vindo</span>
          <strong>Ícaro Régis</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Header>
  );
}
