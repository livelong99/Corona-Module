import React from "react";

function Menu() {
    return (
        <div class="menu-wrap">
    <input type="checkbox" class="toggler" />
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><a href="#">World</a></li>
            <li><a href="#">India</a></li>
            <li><a href="#">Things We can do</a></li>
            <li><a href="#">Helpline</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    );
}


export default Menu;