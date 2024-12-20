import React, { Component } from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { LuDoorOpen } from 'react-icons/lu'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar-up'>
        <nav className="navbar navbar-expand-lg  rounded" aria-label="Thirteenth navbar example">
  <div className="container-fluid mx-5 my-2">
      <a className="navbar-brand col-lg-3 me-0" href="#">
        <img src="https://themeforest.kreativdev.com/bookapp/demo/assets/images/logo/logo-1.png" alt="" />
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-lg-flex md-5" id="navbarsExample11">
      <ul className="navbar-nav col-lg-6 justify-content-lg-center mx-4">
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">Home+</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">Services+</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link " >Vendors+</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link ">Pages+</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link ">Blog+</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link ">Contact</a>
        </li>
      </ul>
      <div className="d-lg-flex col-lg-3 justify-content-lg-end mx-5 d-md-none d-none">
      <p></p>
      <button className='btn lang'><AiOutlineGlobal /> ENG</button>
        <button className=" login"><LuDoorOpen /> Login</button>
      </div>
    </div>
  </div>
</nav>

      </div>
    )
  }
}
