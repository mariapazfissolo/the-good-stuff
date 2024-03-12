import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter> 
    <Navbar/>
    <Routes>
      <Route path='/' element={ <ItemListContainer greetting='Envío grátis a partir de $250.000'/> } />
    </Routes>
     
     
    </BrowserRouter>
  )
  }
export default App;
