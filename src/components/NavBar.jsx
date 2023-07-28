/* eslint-disable no-undef */
import { Carrito } from './CartWidget'
import './NavBar.css'
import './CartWidget.css'
import './ItemListContainer.css'
import { BotonesLista } from './BotonesLista'

export const NavBar = () => {
  return <> <div>
    <nav className="navbar navbar-expand-lg barra">
      <div className="container-fluid">
      <img  src="src/img/milulogo.jpg" className='imagen' alt="" />
      <div className="collapse navbar-collapse lugar letra" id="navbarNav">
        <BotonesLista rubro="Dama"/>
        <BotonesLista rubro="Caballero"/>
        <BotonesLista rubro="Niños"/>
      </div>
        <Carrito items={0}/>  
      </div>
    </nav>
    </div></>
}