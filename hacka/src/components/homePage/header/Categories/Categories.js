import React from 'react'
import './categories.scss';

export default function Categories() {
    return (
        <div className="categories">
            <ul>
                <li> <a>Eletrônicos</a></li> 
                <li> <a>Produtos digitais</a> </li>  
                <li> <a>Agronomia</a> </li>  
                <li> <a>Manufatura</a> </li>
                <li> <a>Segurança</a> </li>
            </ul>
        </div>
    )
}
