import React from "react";

function Menu(props) {
    return (
        <div class="menu-wrap">
    <input type="checkbox" id="menu" class="toggler" />
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><button onClick={() => {
              document.getElementsById("menu").click();
              props.toShow(1);
            }}>World</button></li>
            <li><button onClick={() => {
              document.getElementsById("menu").click();
              props.toShow(2);
            }}>India</button></li>
            <li><button onClick={() => {
              document.getElementsById("menu").click();
              props.toShow(3);
            }}>Things We can do</button></li>
            <li><button onClick={() => {
              document.getElementsById("menu").click();
              props.toShow(4);
            }}>Helpline</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    );
}


export default Menu;