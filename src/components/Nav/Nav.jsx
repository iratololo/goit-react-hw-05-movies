import { NavLink } from "react-router-dom"

import css from "./Nav.module.css"

const Nav = () => {
  return (
     <nav>
        <ul className={css.navigation}>
            <li className={css.item}>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className={css.item}>
                <NavLink to='/movies'>Movies</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav