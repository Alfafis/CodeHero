import React from 'react'
import './Header.css'
import logo from '../logo-objective.png'

const Header = () => {
   return (
		<div className="page-landing-navbar">
      <div className="logo-container">
            <img src={logo} alt=""/>
      </div>
      <div className="group-info">
         <div className="info-candidato">
            <span>Rafael Menezes</span>
            <label>Teste de Front-End</label>
         </div>
         <h2>CB</h2>
      </div>
   </div>
   )
}
export default Header
