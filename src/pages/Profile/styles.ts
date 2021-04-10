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

export const ProfileInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 2rem;
        color: #f8f8f2;
      }
      p {
        margin-top: 4px;
      }

      div.details {
        margin: 0;
        display: flex;
        align-items: center;

        svg {
          margin: 0 7px 0 0;
          color: #f8f8f2;
        }
        p {
          font-size: 18px;
          color: #f8f8f2;
          margin-top: 4px;
        }
      }
    }
  }
  img {
    height: 200px;
    width: 200px;
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #f8f8f2;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #f8f8f2;
      }
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 50px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 90%;
    padding: 25px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(10px);
    }
    div {
      margin: 0 5px;
      flex: 1;
      strong {
        font-size: 22px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    div.created {
      display: flex;
      flex-direction: row;
      align-items: center;
      strong {
        font-size: 14px;
      }
      svg {
        margin-right: 10px;
        width: 22px;
        height: 22px;
      }
    }
    div.pushed {
      display: flex;
      flex-direction: row;
      align-items: center;
      strong {
        font-size: 14px;
      }
      svg {
        margin-right: 10px;
        width: 24px;
        height: 24px;
      }
    }
    svg {
      margin-left: auto;
      color: #3d3d4d;
    }
  }
`;
