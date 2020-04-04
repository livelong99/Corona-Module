import React, { useState } from "react";
import {bubble as Menu} from "react-burger-menu";


var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '20px',
    top: '26px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}




function Men(props) {

    const [check, setCheck] = useState(false);

    // function checkbox() {
    //   if(check)
    //     setCheck(false);
    //   else
    //     setCheck(true);
    // }

    return (

      <Menu styles={ styles } >
        <a onClick={() => {
              props.toShow(1);
              setCheck(false);
            }} className="menu-item" href="#">World</a>
        <a onClick={() => {
              setCheck(false);
              props.toShow(2);
            }} className="menu-item">India</a>
      </Menu>
    );
        /* <div class="menu-wrap">
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
            }}>Things We can do</button></li>
            <li><button onClick={() => {
              setCheck(false);
              props.toShow(4);
            }}>Helpline</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div> */
    
}


export default Men;