import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f8f8f2;
    transition: color 0.2s;
  }
`;

export const Profile = styled.div`
  margin-top: 80px;
  max-width: 700px;
  button {
    border: 0;
    background: transparent;
    color: #f8f8f2;
    margin-right: 20px;
    margin-bottom: 20px;

    &:hover {
      text-decoration: underline;
    }
  }
  a {
    background: #ffff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translate(10px);
    }

    & + a {
      margin-top: 18px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8d3;
      }
    }
    svg {
      margin-left: auto;
      color: #3d3d4d;
    }
  }
`;
