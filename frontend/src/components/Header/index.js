/* eslint-disable operator-linebreak */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Notification from '~/components/Notifications';

import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Dado Tools" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>{profile.nome}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/120/abott@adorable.png'
              }
              alt="Vágner Lenon"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
