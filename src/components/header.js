import React from "react"
import { Link } from "gatsby"
import logo from "../images/es-logo.svg"

const Header = () => (
  <header className="header">
    <nav id="main-nav" className="navbar">
      <img src={logo} className="logo" alt="logo" />
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
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
    </nav>
  </header>
)

export default Header
