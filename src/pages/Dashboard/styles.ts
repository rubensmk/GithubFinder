/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Searched = styled.div`

  display:flex;
  align-items:center;

  button{
    border: 0;
    background:transparent;

    svg{
      color:#f8f8f2;
      margin-right:7px;
      transition: 0.2s;

      &:hover{
        transform: translateX(3px)
      }
    }
  }
`;
export const Title = styled.h1`
  font-size: 36px;
  max-width: 650px;
  line-height: 56px;

  margin-top: 80px;

  display:flex;

`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #ffff;
    border-right: 0;

    ${props => props.hasError && css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #59886b;
    border-radius: 0px 5px 5px 0px;
    color: #ffff;
    font-weight: bold;
    transition: background-color 0.2s;
    border:0;

    &:hover {
      background: ${shade(0.2, `#59886b`)};
    }
  }
`;

export const Profile = styled.div`
  margin-top: 80px;
  button{
    border:0;
    background:transparent;
    margin-right:20px;

    &:hover{
      transform:translateY(-5px);
    }
  }
  a {
    background: #ffff;
    border-radius: 5px;
    width: 700px;
    height:200px;
    padding: 20px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translate(15px);
    }

    img {
      width: 112px;
      height: 112px;
      border-radius: 50%;
    }

    div {
      margin: 0 24px;
      flex: 1;

      strong {
        font-size: 28px;
        color: #3d3d4d;
      }
      p {
        font-size: 20px;
        color: #a8a8d3;
      }
    }
    svg {
      margin-left: auto;
      color: #3d3d4d;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
