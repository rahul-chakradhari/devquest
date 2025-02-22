import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Project Title
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  About
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  section1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  section2
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  section3
                </Link>
              </li>
            </ul>
            <Link to="/login" className="btn btn-primary mx-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary mx-2">
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
