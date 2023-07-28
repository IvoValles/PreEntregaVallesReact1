/* eslint-disable react/prop-types */
export function BotonesLista({rubro}){
    return <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{rubro}</a>
            </li>
          </ul>
    </>
}