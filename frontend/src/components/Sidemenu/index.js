import {Link} from 'react-router-dom'
import './index.css'

export default function Sidemenu({menuState,toggleMenu}) {
    let menu = menuState ? "sidemenu act" : "sidemenu"
    return (
        <div className = {menu}>
            <ul className = "p-5">
                <li className = "text-xl font-bold" onClick={toggleMenu}>
                    <Link to = "/cart">
                    cart
                    </Link>
                </li>
                <hr/>
                <li className = "text-xl font-bold" onClick={toggleMenu}>
                    <Link to = "/">
                        shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}
