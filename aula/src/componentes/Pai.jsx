import { checkPropTypes } from 'prop-types'
import React from 'react'
import Filho from './Filho'

export default props => 
    <h1>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {props.children}
        </ul>
    </h1>