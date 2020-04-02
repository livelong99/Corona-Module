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
            <li><button>World</button></li>
            <li><button>India</button></li>
            <li><button>Things We can do</button></li>
            <li><button>Helpline</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    );
}


export default Menu;