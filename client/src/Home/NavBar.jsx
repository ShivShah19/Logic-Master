import React from 'react'

const NavBar = () => {
  return (
    <>
    <header className="p-3 m-0 border-0 bd-example m-0 border-0" id="header">
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
            <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
                <a className="navbar-brand" href="/">Logic Master</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#header">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#explore">Explore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Aboutus">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faq-section">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default NavBar