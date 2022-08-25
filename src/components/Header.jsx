import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import myLogo from "./img/GaleLogo_png2.png";

export default function Header() {
  return (
    <header id="header">
      <div class="p-2 p-lg-3 bg-danger fixed-top shadow-lg">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/Home#header"
              className="d-flex align-items-center my-1 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img src={myLogo} width="180" height="75" alt="Gale Logo" />
            </NavLink>
            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-lg-1 text-small fw-bold">
              <li>
                <NavLink to="/Home#header" className="nav-link text-white">
                  <i class="bi bi-house-door d-block d-flex justify-content-center mb-1 fs-5"></i>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/Menu1#selection" className="nav-link text-white">
                  <i class="bi bi-menu-button-wide-fill d-block d-flex justify-content-center mb-1 fs-5"></i>
                  MENU
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Home#fb_review"
                  activeClassName="selected"
                  className="nav-link text-white"
                >
                  <i class="bi bi-megaphone d-block d-flex justify-content-center mb-1 fs-5"></i>
                  REVIEWS
                </NavLink>
              </li>
              <li>
                <NavLink to="/About#about" className="nav-link text-white">
                  <i class="bi bi-people d-block d-flex justify-content-center mb-1 fs-5"></i>
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
