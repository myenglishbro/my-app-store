import "./NavBar.css"
import cart from '../../img/cart-svgrepo-com.svg'
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
          <img src={cart} alt='' className="carrito"/>
        

    </nav>


    );
}

export default NavBar;