import React from "react"
import { Link } from "gatsby"
import logo from "../images/es-logo.svg"

const Header = () => (
  <header className="header">
    <nav id="main-nav" className="navbar">
      <Link to="/">
      <img src={logo} className="logo" alt="logo" />
      </Link>
        <ul>
          <li>
            <Link to="#">About Me</Link>
          </li>
          <li>
            <Link to="#">What I Do</Link>
          </li>
          <li>
            <Link to="#">Portfolio</Link>
          </li>
          <li>
            <Link to="#">Experience</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
    </nav>
  </header>
)

export default Header
