import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 10px;

  form {
    hr {
      border: 0;
      margin: 10px auto;
      width: 90%;

      height: 1px;
      background: rgba(0, 0, 0, 0.4);
    }

    header {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }

    input {
      height: 30px;
      padding: 0 10px;
      border: 0;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.3);
      color: #000;
      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
        font-weight: 400;
      }
    }
  }
`;

export const Colunas = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  input,
  button {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 0;
    border-radius: 4px;

    margin: 0 5px;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  button:submit {
    background: #fff;
  }

  textarea {
    width: 100%;
    margin: 0 5px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  textarea {
    resize: none;
    padding: 0 10px;
    border: 0;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.3);
    color: #000;
    &::placeholder {
      color: rgba(0, 0, 0, 0.7);
      font-weight: 400;
    }
  }
`;

export const ColunasBtn = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  button {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 0;
    border-radius: 4px;
    margin: 0 5px;
    font-weight: bold;
    color: #fff;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.6);
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    &:first-child {
      margin-left: 0;
      background: #c0392b;
    }
    &:last-child {
      margin-right: 0;
      background: #27ae60;
    }
  }
`;
