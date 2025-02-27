import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            TraffiEase <i className="fa-solid fa-city"></i>
          </Link>
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/pathways"
                >
                  Routes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/broute"
                >
                  Best Route
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/report"
                >
                  Report
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/rewards"
                >
                  Rewards
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/eroute"
                >
                  Emergency Route
                </Link>
              </li>
              {/*"Contribute" tab sirf logged-in users ke liye */}
              {isLoggedin && (
                <li>
                  <Link className="nav-link-active" to="/contribute">
                    Contribute
                  </Link>
                </li>
              )}
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
