/* eslint-disable operator-linebreak */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Notification from '~/components/Notifications';

import logo from '~/assets/logoDaDo_vermelho.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Dado Tools" title="Home" />
          </Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <Link to="/profile">
                <strong>{profile.nome}</strong>
                Cargo
              </Link>
            </div>
            <Link to="/profile">
              <img
                src={
                  profile.avatar.url ||
                  'https://api.adorable.io/avatars/120/abott@adorable.png'
                }
                alt="Vágner Lenon"
              />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
