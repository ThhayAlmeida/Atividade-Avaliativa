import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import PLogin from './pages/pageLogin';
import PageHome from './pages/pageHome';
import PageProdutos from './pages/pageProdutos';

function App() {
  return (

    <BrowserRouter>
     <Routes>
      <Route path='/' element={<PLogin />}/>
      <Route path='/Home' element={<PageHome/>}></Route>
      <Route path='/Produto' element={<PageProdutos/>}></Route>
     </Routes>
    </BrowserRouter>

  )
}

export default App;