import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid">
          <Link class="navbar-brand fs-1 fst-italic" to="/">
            GoFoodie
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav me-auto mb-2">
              <Link class="nav-link active fs-5" aria-current="page" to="/">
                Home
              </Link>
              {localStorage.getItem("authToken") ? (
                <Link class="nav-link active fs-5" aria-current="page" to="/">
                  My Orders
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link class="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link class="btn bg-white text-success mx-1" to="/createuser">
                Sign Up
              </Link>
            </div>
          ) : (
            <div>
              <div className="btn bg-white text-success mx-2">My Cart</div>
              <div
                className="btn bg-white text-danger mx-2"
                onClick={handlelogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
