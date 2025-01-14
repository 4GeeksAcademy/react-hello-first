import React from "react";

 const Navbar= ()=>{
    return(
        <nav className="navbar  navbar-expand-lg bg-dark ">
        <div className="container">
          <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" style={{border:"0.3px white solid"}} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav " style={{marginLeft:"auto"}}>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Services</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link disabled text-white" aria-disabled="true">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
}

export default Navbar;