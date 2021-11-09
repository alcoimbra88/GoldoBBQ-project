import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Foot = styled.footer`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  position: fixed;


  a {
    color: #fff;
    margin: 0 10px 0;
    cursor: pointer;
    transition: 500ms;
  }

  a:hover{
    color: ${primaryDarkColor}
  }

  span {
      color : #fff
  }
`;