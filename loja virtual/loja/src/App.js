import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import pLogin from './pages/pageLogin';

function App() {
  return (

    <BrowserRouter>
     <Routes>
      <Route path='/' element={<pLogin />}/>
     </Routes>
    </BrowserRouter>

  )
}

export default App;