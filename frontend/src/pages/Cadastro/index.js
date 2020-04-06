import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaClock,
  FaTimesCircle,
  FaCheckCircle,
  FaExclamationCircle,
  FaPlusCircle,
  FaCaretLeft,
  FaCaretDown,
} from 'react-icons/fa';

import {
  Container,
  New,
  LinhaCadastro,
  Concluidas,
  Title,
  PendentesBody,
  ConcluidasBody,
} from './styles';

export default function Cadastro() {
  const [pendentsVisible, setPendentsVisible] = useState(true);
  const [concluidasVisible, setConcluidassVisible] = useState(false);

  function handlePendentsVisible() {
    setPendentsVisible(!pendentsVisible);
  }

  function handleConcluidasVisible() {
    setConcluidassVisible(!concluidasVisible);
  }

  return (
    <Container>
      <New>
        <Link to="/cadastros/novo">Criar cadastro</Link>
        <FaPlusCircle size={30} color="#333" />
      </New>
      <hr />
      <Title>
        <h1>Pendentes</h1>
        <button type="button" onClick={handlePendentsVisible}>
          {pendentsVisible ? (
            <FaCaretDown size={28} color="#333" />
          ) : (
            <FaCaretLeft size={28} color="#333" />
          )}
        </button>
      </Title>
      <PendentesBody visible={pendentsVisible}>
        <LinhaCadastro>
          <div>
            <header>
              <div>
                <h2>Empresa</h2>
                <button type="button">[Editar]</button>
                <button type="button">[Ver]</button>
              </div>
              <span>25/10/2020 : 10:15</span>
            </header>
            <strong>CNPJ/CPF:</strong> 05.090.366/0001-12
            <strong>Endereço:</strong> Avenida Getulio vargas 626, apartamento
            103 - Menino Deus - Porto Alegre - RS
          </div>

          <FaClock size={30} color="#2980b9" />
        </LinhaCadastro>

        <LinhaCadastro>
          <div>
            <header>
              <div>
                <h2>Empresa</h2>
                <button type="button">[Editar]</button>
                <button type="button">[Ver]</button>
              </div>
              <span>25/10/2020 : 10:15</span>
            </header>
            <strong>CNPJ/CPF:</strong> 05.090.366/0001-12
            <strong>Endereço:</strong> Avenida Getulio vargas 626, apartamento
            103 - Menino Deus - Porto Alegre - RS
          </div>

          <FaClock size={30} color="#2980b9" />
        </LinhaCadastro>

        <LinhaCadastro>
          <div>
            <header>
              <div>
                <h2>Empresa</h2>
                <button type="button">[Editar]</button>
                <button type="button">[Ver]</button>
              </div>
              <span>25/10/2020 : 10:15</span>
            </header>
            <strong>CNPJ/CPF:</strong> 05.090.366/0001-12
            <strong>Endereço:</strong> Avenida Getulio vargas 626, apartamento
            103 - Menino Deus - Porto Alegre - RS
          </div>

          <FaClock size={30} color="#2980b9" />
        </LinhaCadastro>

        <LinhaCadastro>
          <div>
            <header>
              <div>
                <h2>Empresa</h2>
                <button type="button">[Editar]</button>
                <button type="button">[Ver]</button>
              </div>
              <span>25/10/2020 : 10:15</span>
            </header>
            <strong>CNPJ/CPF:</strong> 05.090.366/0001-12
            <strong>Endereço:</strong> Avenida Getulio vargas 626, apartamento
            103 - Menino Deus - Porto Alegre - RS
          </div>

          <FaClock size={30} color="#2980b9" />
        </LinhaCadastro>
      </PendentesBody>
      <hr />

      <Title>
        <h1>Concluídos</h1>
        <button type="button" onClick={handleConcluidasVisible}>
          {concluidasVisible ? (
            <FaCaretDown size={28} color="#333" />
          ) : (
            <FaCaretLeft size={28} color="#333" />
          )}
        </button>
      </Title>
      <ConcluidasBody visible={concluidasVisible}>
        <Concluidas>
          <div>
            <header>
              <div>
                <h2>Empresa</h2>
                <button type="button">[Ver]</button>
              </div>
              <span>25/10/2020 : 10:15</span>
            </header>
            <strong>CNPJ/CPF:</strong>
            05.090.366/0001-12
            <strong>Endereço:</strong>
            Avenida Getulio vargas 626, apartamento 103 - Menino Deus - Porto
            Alegre - RS
          </div>

          <FaCheckCircle size={30} color="#27ae60" />
        </Concluidas>

        <Concluidas>
          <div>
            <header>
              <div>
                <h2>Empresa</h2>
                <button type="button">[Ver]</button>
              </div>
              <span>25/10/2020 : 10:15</span>
            </header>
            <strong>CNPJ/CPF:</strong>
            05.090.366/0001-12
            <strong>Endereço:</strong>
            Avenida Getulio vargas 626, apartamento 103 - Menino Deus - Porto
            Alegre - RS
          </div>

          <FaTimesCircle size={30} color="#c0392b" />
        </Concluidas>

        <Concluidas>
          <div>
            <header>
              <div>
                <h2>Empresa</h2>
                <button type="button">[Ver]</button>
              </div>
              <span>25/10/2020 : 10:15</span>
            </header>
            <strong>CNPJ/CPF:</strong>
            05.090.366/0001-12
            <strong>Endereço:</strong>
            Avenida Getulio vargas 626, apartamento 103 - Menino Deus - Porto
            Alegre - RS
          </div>

          <FaTimesCircle size={30} color="#c0392b" />
        </Concluidas>

        <Concluidas>
          <div>
            <header>
              <div>
                <h2>Empresa</h2>
                <button type="button">[Ver]</button>
              </div>
              <span>25/10/2020 : 10:15</span>
            </header>
            <strong>CNPJ/CPF:</strong>
            05.090.366/0001-12
            <strong>Endereço:</strong>
            Avenida Getulio vargas 626, apartamento 103 - Menino Deus - Porto
            Alegre - RS
          </div>

          <FaTimesCircle size={30} color="#c0392b" />
        </Concluidas>

        <Concluidas>
          <div>
            <header>
              <div>
                <h2>Empresa</h2>
                <button type="button">[Ver]</button>
              </div>
              <span>25/10/2020 : 10:15</span>
            </header>
            <strong>CNPJ/CPF:</strong>
            05.090.366/0001-12
            <strong>Endereço:</strong>
            Avenida Getulio vargas 626, apartamento 103 - Menino Deus - Porto
            Alegre - RS
          </div>

          <FaExclamationCircle size={30} color="#f39c12" />
        </Concluidas>
      </ConcluidasBody>
    </Container>
  );
}
