import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greetting='Envío grátis a partir de $210.000'/> }/>
      <Route path='/categories/:categoryId' element={<ItemListContainer greetting='Categoría:'/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
    </Routes>
  </BrowserRouter> 
  )
}
export default App;
