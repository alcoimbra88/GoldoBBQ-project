import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const ButtonS = styled.button`
    cursor: pointer;
    background: #fff;
    border: none;
    color:${primaryColor};
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 20px;
    transition: 0.3s;
    opacity: 0;
    animation: fadeIn 3s 8s forwards;

    @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

    :hover{
        color:#fff;
        background-color: ${primaryColor};
        box-shadow: white 0px 0px 5px;
    }
`;