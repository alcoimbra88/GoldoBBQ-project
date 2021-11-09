import styled from "styled-components";
import bgImage from '../../images/bgImage.jpg'

export const Div = styled.div`
    background: url(${bgImage}) center;
    background-size: cover;
    width: 100%;
    height: 88vh;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    color: #fff;
    position: absolute;
    max-width: 50%;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;

    .fade-in-title {
        margin-bottom: 50px;
        opacity: 0;
        animation: fadeIn 8s 1s forwards;
    }

    .fade-in-subtitle{
        opacity: 0;
        animation: fadeIn 8s 4s forwards;
    }

    @keyframes fadeIn{
        from {
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    a {    background: none;
    position: absolute;
    color: #fff;
    font-size: 1.5em;
    border: none;
    cursor: pointer;
    margin-top: 60px ;
    margin-left: -20px;
    opacity: 0;
    animation: fadeIn 3s 8s forwards;
    transition:0.5s;

    :hover {
    text-shadow: white 0px 0px 10px;
    text-decoration: underline
  }

    @keyframes fadeIn{
        from {
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }}
`;

// export const Button = styled.button`
//     background: none;
//     position: absolute;
//     color: #fff;
//     font-size: 1.8em;
//     border: none;
//     cursor: pointer;
//     margin-top: 100px ;
//     margin-left: -30px;
//     opacity: 0;
//     animation: fadeIn 3s 8s forwards;
//     transition:0.5s;

//     :hover {
//     text-shadow: white 0px 0px 10px;
//     text-decoration: underline
//   }

//     @keyframes fadeIn{
//         from {
//             opacity: 0;
//         }
//         to{
//             opacity: 1;
//         }
//     }
// `;