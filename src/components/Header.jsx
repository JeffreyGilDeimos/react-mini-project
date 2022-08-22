import React from "react";
import myLogo from "./img/GaleLogo_png.png";

export default function Header() {
  return (
    <header>
      <div class="p-2 p-lg-3 bgred fixed-top">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="#"
              class="d-flex align-items-center my-1 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img src={myLogo} width="180" height="75" alt="Gale Logo" />
            </a>

            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-lg-1 text-small fw-bold">
              <li>
                <a href="#" class="nav-link text-white-50">
                  <i class="bi bi-house-door d-block d-flex justify-content-center mb-1 fs-5"></i>
                  HOME
                </a>
              </li>
              <li>
                <a href="menu.html" class="nav-link text-white">
                  <i class="bi bi-menu-button-wide-fill d-block d-flex justify-content-center mb-1 fs-5"></i>
                  MENU
                </a>
              </li>
              <li>
                <a href="#fb_review" class="nav-link text-white">
                  <i class="bi bi-megaphone d-block d-flex justify-content-center mb-1 fs-5"></i>
                  REVIEWS
                </a>
              </li>

              <li>
                <a href="about.html" class="nav-link text-white">
                  <i class="bi bi-people d-block d-flex justify-content-center mb-1 fs-5"></i>
                  ABOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
