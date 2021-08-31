import {Link} from 'react-router-dom'
import './index.css'

export default function Sidemenu({menuState,toggleMenu}) {
    let menu=menuState?"sidemenu act":"sidemenu"
    return (
        <div className={menu}>
            <ul>
                <li className="text-xl" onClick={toggleMenu}>
                    <Link to="/cart">
                    cart
                    </Link>
                </li>
                <li className="text-xl" onClick={toggleMenu}>
                    <Link to="/">
                        shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}
