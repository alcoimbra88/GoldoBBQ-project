import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    font-size: 35px;
    margin: 0 10px 0;
    font-weight: bold;
    opacity: 0;
    animation: fadeIn 3s 8s forwards;
    transition: 0.5s;
  }

  #links a:hover {
    text-shadow: white 0px 0px 10px;
    text-decoration: underline
  }

  #links a {
    font-size: 1.1em;
    font-weight: lighter;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
