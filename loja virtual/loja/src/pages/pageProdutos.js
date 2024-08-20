import './pageProdutos.css';
import React from 'react';
import athousandbrokenpieces from '../images/athousandbrokenpieces.png';
import cityofbones from '../images/cityofbones.png';

function PProdutos() {
    return (
        <div>
            <h1 id='Car'>Carrinho de Compras</h1>

            <div id='ProdSelect'>
                <img id='All1' src={athousandbrokenpieces} className='athousandbrokenpieces' alt='athousandbrokenpieces' />
                <div className='ProdutoCar'>
                    <h4>Quebrado em Mil Pedaços</h4>
                    <h4>R$79,90</h4>
                    <button id='botao'>Remover</button>
                </div>
            </div>

            <div id='ProdSelect1'>
                <img id='All1' src={cityofbones} className='cityofbones' alt='cityofbones' />
                <div className='ProdutoCar'>
                    <h4>Instrumentos Mortais: Cidade dos Ossos</h4>
                    <h4>R$53,64</h4>
                    <button id='botao'>Remover</button>
                </div>
            </div>

            <h3>Total: R$ 133,54</h3>

            <button id='botaoF'>Finalizar Compra</button>

        </div>
    )
}

export default PProdutos;