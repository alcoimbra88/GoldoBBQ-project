import React from "react";
import { Link } from "react-router-dom";

import { Div } from "./styled";
import { Container } from "./styled";

export default function Home () {
    return (
            <Div>
                <Container >
                    <h1 className="fade-in-title"> Seja bem vindo ao Churras do Goldo</h1>
                    <h2 className="fade-in-subtitle"> O melhor churrasco do mundo. </h2>
                    <Link to='/inicio'>
                        <a href=" ">Entrar</a>
                    </Link>
                </Container>
            </Div>
        )
};