import React, { useState } from "react";

function Menu(props) {

    const [check, setCheck] = useState(false);

    function checkbox() {
      if(check)
        setCheck(false);
      else
        setCheck(true);
    }

    return (
        <div class="menu-wrap">
    <input type="checkbox" onClick={checkbox} id="menu" class="toggler" checked={check} />
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><button onClick={() => {
              props.toShow(1);
              setCheck(false);
            }}>World</button></li>
            <li><button onClick={() => {
              setCheck(false);
              props.toShow(2);
            }}>India</button></li>
            <li><button onClick={() => {
              setCheck(false);
              props.toShow(3);
            }}>Public Knoledge</button></li>
            <li><button onClick={() => {
              setCheck(false);
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