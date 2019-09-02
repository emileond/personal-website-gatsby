import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./Footer"

import "./layout.scss"
import '../styles/styles.scss'


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
        <main>{children}</main>
      <Footer tecnologia="Gatsby️ 💟 ️"/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


// const scroll = window

// scroll.addEventListener('scroll', function() {
//   if (window.pageYOffset > 100) {
//       document.getElementById('main-nav').classList.add('navbar-scrolled')
//   }
//   else {
//       document.getElementById('main-nav').classList.remove('navbar-scrolled')
//   }
// })

export default Layout
