import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="site-nav">
      <NavLink to="/" end>Início</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar
