import { NavBar } from './components/NavBar'
import { Mensaje } from './components/ItemListContainer'

function App() {

  return (
    <>
    <NavBar/>
    <div>
      <Mensaje greeting="Bienvenidos a mi E-Commerce"/>
    </div>
    </>
  )
}

export default App