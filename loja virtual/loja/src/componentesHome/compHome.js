import './compHome.css';

function InputBusca(props){
    
    return <input id='inputEs' className='Input' type="text" name="Pesquise na loja" placeholder={props.nome}/>
}

export default InputBusca;