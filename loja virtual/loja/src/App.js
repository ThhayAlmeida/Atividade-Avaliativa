import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import PLogin from './pages/pageLogin';
import PageHome from './pages/pageHome';
import PProdutos from './pages/pageProdutos';

function App() {
  return (

    <BrowserRouter>
     <Routes>
      <Route path='/' element={<PLogin />}/>
      <Route path='/Home' element={<PageHome/>}/>
      <Route path='/Produto' element={<PProdutos/>}/>
     </Routes>
    </BrowserRouter>

  )
}

export default App;