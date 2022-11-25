import "./NavBar.css"

import CartWidget from "./CartWidget";
function NavBar(){
   
   
   
    return(
    <nav className="nav">
        <a href="/" className="site-titte"> EasyMarket</a>
          <ul>

            <li>
                 <a href="/">Caballeros</a>
            </li>

            <li>
            <a href="/">Damas</a>
            </li>
            <li>
            <a href="/">Niños</a>
            </li>
            <li>
            <a href="/">Nosotros</a>
            </li>
          </ul>
         
          <CartWidget/>

    </nav>


    );
}

export default NavBar;