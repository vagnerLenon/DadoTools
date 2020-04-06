/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import { Container, Colunas, ColunasBtn } from './styles';

export default function NovoCadastro() {
  const [cnpj, setCnpj] = useState('');
  const [pessoaJuridica, setPessoaJuridica] = useState(true);

  function handleCnpj(e) {
    setCnpj(e.target.value);
  }

  function handlePessoa() {
    setPessoaJuridica(!pessoaJuridica);
    setCnpj('');
  }

  return (
    <Container>
      <h1>Criar cadastro de cliente</h1>
      <hr />
      <form>
        <header>
          <h2>Dados gerais</h2>
          <div>
            <label htmlFor="pessoa">Pessoa jurídica</label>
            <input
              type="checkbox"
              id="pessoa"
              name="pessoa"
              checked={pessoaJuridica}
              onChange={handlePessoa}
            />
          </div>
        </header>
        <Colunas>
          <InputMask
            mask={pessoaJuridica ? '99.999.999/9999-99' : '999.999.999-99'}
            value={cnpj}
            onChange={handleCnpj}
            placeholder="CNPJ / CPF"
          />
          <InputMask
            type="text"
            mask="99/99/9999"
            name="nascimento"
            style={{ display: pessoaJuridica && 'none' }}
            placeholder="Data de nascimento"
          />
          <input name="fantasia" placeholder="Fantasia / Apelido" />
        </Colunas>
        <Colunas>
          <input name="nome" placeholder="Razão social / Nome completo" />
        </Colunas>
        <Colunas>
          <InputMask
            type="text"
            mask="99999-999"
            name="cep"
            placeholder="Cep"
          />
          <input type="text" name="logradouro" placeholder="Logradoro" />
          <input type="text" name="numero" placeholder="Número" />
          <input type="text" name="complemento" placeholder="Complemento" />
        </Colunas>
        <Colunas>
          <input type="text" name="bairro" placeholder="Bairro" />
          <input type="text" name="cidade" placeholder="Município" />
          <input type="text" name="estado" placeholder="Estado" />
          <input type="text" name="pais" placeholder="País" />
        </Colunas>
        <Colunas>
          <InputMask
            mask="(99) 9999-99999"
            type="text"
            name="fone"
            placeholder="Telefone principal"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail para envio de XML"
          />
        </Colunas>
        <hr />
        <h2>Dados gerais</h2>
        <Colunas>
          <input type="text" name="foneComprador" placeholder="" />
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="" />
        </Colunas>
        <Colunas>
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="" />
        </Colunas>
        <Colunas>
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="" />
        </Colunas>
        <Colunas>
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="" />
        </Colunas>
        <hr />
        <Colunas>
          <textarea name="" id="" cols="30" rows="5" />
        </Colunas>
        <hr />
        <ColunasBtn>
          <button type="button">Cancelar Cadastro</button>
          <button type="submit">Cadastrar Cliente</button>
        </ColunasBtn>
      </form>
    </Container>
  );
}
