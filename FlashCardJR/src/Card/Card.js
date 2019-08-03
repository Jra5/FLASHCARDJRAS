import React, { Component } from 'react';
import './Card.css';

const Card = (props) => (
    <div className="contenedorcarta">
        <div className="carta">

            <div className="front">
                <div className="imagen">
                    {props.nombre};
                    {props.imagen};
                </div>
            </div>

            <div className="back">
                <div className="texto">
                    <h1>¿Sabías qué?</h1> 
                    {props.texto};
                </div>
            </div>
        </div>
    </div>
)

export default Card;