import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Taza Khabar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">Home</Link>
              </li> */}
              {/* <li className="nav-item"><Link className="nav-link" to="#">Link</Link></li> */}

              {/* sab a and href ko link and to mai badle
                  sab to ko /category diye  */}
              <li className="nav-item"><Link className="nav-link text-style-italic" to="/">General</Link></li>
              <li className="nav-item"><Link className="nav-link text-style-italic" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link text-style-italic" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link text-style-italic" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link text-style-italic" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link text-style-italic" to="/sports">Sports </Link></li>
              <li className="nav-item"><Link className="nav-link text-style-italic" to="/technology">Technology</Link></li>
              

            </ul>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
