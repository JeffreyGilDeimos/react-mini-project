import React from "react";

export default function Footer() {
  return (
    // <!-- ---- Footer---- -->
    <footer class="p-4 bgred position-relative">
      <div class="container">
        <div class="d-flex align-items-center flex-column text-light">
          <p class="m-0 fs-6">Follow Gale ArtCakes at</p>
          <a href="#">
            <i class="bi bi-facebook text-light fs-5"></i>
          </a>
          <p class="text-light fs-6 lead pt-2">
            &copy;2022 Gale ArtCakes. All Rights Reserved.
          </p>
        </div>
        <a href="#" class="position-absolute bottom-0 end-0 p-5">
          <i class="bi bi-arrow-up-circle text-light fs-2"></i>
        </a>
      </div>
    </footer>
  );
}
