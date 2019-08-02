import React, { Component } from 'react';
import './Card.cs';

const Card = (props) => (
    <div className="contenedorcarta">
        <div className="carta">
            <div className="front">
                <div className="texto">
                    {props.texto}
                </div>
            </div>
            <div className="back">
                <div className="imagen">

                </div>
            </div>
        </div>
    </div>
)

export default Card;