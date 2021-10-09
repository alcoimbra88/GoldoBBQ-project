import React from "react";
import { ButtonS } from "./styled";

export default function Button (props) {
    return (
        <ButtonS onClick={props.onClick}> {props.children} </ButtonS>
    )    
}
