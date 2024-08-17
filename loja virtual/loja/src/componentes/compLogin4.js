import './compLogin4.css'
import{Link} from 'react-router-dom';

function Button(props){
    
    return <button>
        <Link to='/home'>Login</Link>
    </button>
}

export default Button