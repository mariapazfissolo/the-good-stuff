import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  const saludo ='Estamos creando este sitio para vos!'
  return (
    <div>
      <Navbar/>
      <ItemListContainer greetting='¡Bienvenidos a The Good Stuff!' saludo = {saludo}/>
    </div>
  )
  }
export default App;
