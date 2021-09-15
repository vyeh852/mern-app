import { Link } from 'react-router-dom'
import './index.css'

export default function Navbar({toggleMenu}) {
    return (
        <div className="navbar flex justify-between p-5 bg-black">
          <div className="nav-icon">
            <Link to="/">
             <h1 className="text-white font-bold text-xl">Full stack test</h1>
            </Link>
          </div>
          <ul className="nav-list hidden w-60 mr-5">
              <li className="text-white text-xl">
                <Link to="/cart">
                cart
                </Link>
              </li>
              <li className="text-white text-xl">
                <Link to="/">
                    shop
                </Link>
              </li>
              <li className="text-white text-xl">
                <Link to="/login">
                    login
                </Link>
              </li>
          </ul>
          <div className="nav-hamburger cursor-pointer" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
    )
}
