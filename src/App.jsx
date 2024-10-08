import NavBar from './components/NavBar/NavBar'
import './App.css'
import volanda from "./assets/volanda.png"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
      <div className='container-app'>
        <NavBar />
        <ItemListContainer saludo={"Bienvenidos a volanda"}/>
      </div>
  )
}

export default App
