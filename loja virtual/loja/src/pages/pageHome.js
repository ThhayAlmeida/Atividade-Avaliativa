import './pageHome.css';
import React from 'react';
import InputBusca from '../componentesHome/compHome';
import InputLupa from '../componentesHome/compHome1';
import ButtonBuy from '../componentesHome/compHome3';
import lupa from '../images/lupa.png';
import itendswithus from '../images/itendswithus.png';
import cityofbones from '../images/cityofbones.png';
import hp1 from '../images/hp1.png';
import pj1 from '../images/pj1.png';
import athousandboykisses from '../images/athousandboykisses.png';
import thingsweneverlu from '../images/thingsweneverlu.png';
import thingswenevergotover from '../images/thingswenevergotover.png';
import maybeinanotherlife from '../images/maybeinanotherlife.png';
import athousandbrokenpieces from '../images/athousandbrokenpieces.png';
import the100 from '../images/the100.png';
import secretcircle from '../images/secretcircle.png';
import twilight from '../images/twilight.png';
import carrinho from '../images/carrinho.png';
import{Link} from 'react-router-dom';

function PageHome() {
    return (
        <div>
            <h1 id='titulo'>Book Store</h1>
            <div className="InputBusca1">
                <InputBusca name="Busca" />
                <img id='lupa' src={lupa} className="lupa" alt='lupa' />
            </div>

            <div id='Carrinho'>
                <Link id='log1' to='/Produto'>Carrinho</Link>
                <img id='Carrinho1' src={carrinho} className='carrinho' alt='carrinho' />
            </div>

            <h3>Fantasia</h3>

            <div id='Primeiro'>

                <div id='ListaProdutos1'>
                    <img id='All' src={cityofbones} className='cityofbones' alt='cityofbones' />
                    <h4>Cidade dos Ossos</h4>
                    <h4>R$53,64</h4>
                    <button id='botao'>Comprar</button>
                </div>

                <div id='ListaProdutos1'>
                    <img id='All' src={hp1} className='hp1' alt='hp1' />
                    <h5>Harry Pottere a Pedra Filosofal</h5>
                    <h5>R$42,00</h5>
                    <button id='botao'>Comprar</button>
                </div>

                <div id='ListaProdutos1'>
                    <img id='All' src={pj1} className='pj1' alt='pj1' />
                    <h5>Percy Jackson e o Ladrão de Raios</h5>
                    <h5>R$44,92</h5>
                    <button id='botao'>Comprar</button>
                </div>

                <div id='ListaProdutos1'>
                    <img id='All' src={the100} className='the100' alt='the100' />
                    <h4>Os 100</h4>
                    <h4>R$29,80</h4>
                    <button id='botao'>Comprar</button>
                </div>

                <div id='ListaProdutos1'>
                    <img id='All' src={secretcircle} className='secretcircle' alt='secretcircle' />
                    <h4>O Circulo Secreto: Iniciação</h4>
                    <h4>R$29,80</h4>
                    <button id='botao'>Comprar</button>
                </div>

                <div id='ListaProdutos1'>
                    <img id='All' src={twilight} className='twilight' alt='twilight' />
                    <h4>Crepusculo</h4>
                    <h4>R$55,90</h4>
                    <button id='botao'>Comprar</button>
                </div>

            </div>

            <h3>Romance</h3>

            <div id='Segundo'>

                <div id='ListaProdutos'>
                    <img src={itendswithus} className='itendswithus' alt='itendswithus' />
                    <h4>É Assim Que Acaba</h4>
                    <h4>R$43,37</h4>
                    <button id='botao'>Comprar</button>
                </div>

                <div id='ListaProdutos1'>
                    <img id='All' src={thingswenevergotover} className='thingswenevergotover' alt='thingswenevergotover' />
                    <h5>As Coisas Que Nunca Superamos</h5>
                    <h5>R$69,02</h5>
                    <button id='botao'>Comprar</button>
                </div>

                <div id='ListaProdutos1'>
                    <img id='All' src={athousandboykisses} className='athousandboykisses' alt='athousandboykisses' />
                    <h4>Mil Beijos de um Garoto</h4>
                    <h4>R$49,92</h4>
                    <button id='botao'>Comprar</button>
                </div>

                <div id='ListaProdutos1'>
                    <img id='All' src={athousandbrokenpieces} className='athousandbrokenpieces' alt='athousandbrokenpieces' />
                    <h4>Quebrado em Mil Pedaços</h4>
                    <h4>R$79,90</h4>
                    <button id='botao'>Comprar</button>
                </div>

                <div id='ListaProdutos1'>
                    <img id='All' src={maybeinanotherlife} className='maybeinanotherlife' alt='maybeinanotherlife' />
                    <h4>Talvez em Outra Vida</h4>
                    <h4>R$39,90</h4>
                    <button id='botao'>Comprar</button>
                </div>

                <div id='ListaProdutos1'>
                    <img id='All' src={thingsweneverlu} className='thingsweneverlu' alt='thingsweneverlu' />
                    <h4>Tudo Que deixamos Inacabado</h4>
                    <h4>R$39,92</h4>
                    <button id='botao'>Comprar</button>
                </div>

            </div>

        </div>
    )
}

export default PageHome;