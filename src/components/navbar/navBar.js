import React,{ useState, useEffect } from 'react';
import './navBar.css';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im'
import { NAV } from '../../consts/navConst';

const NavBar = (props) => {

  const images = {
    home: AiFillHome,
    user: FaUserAlt,
    qualification: ImBooks,
  };

  useEffect(() => {

  },[])
  return (
        <div className='nav-container' >
          <ul>
            {
              NAV.map((item,index) => {
                const lastIndex = (index === (NAV.length - 1)? 'last-item' : '' )
                return(
                    <div key={index}>
                      <li>
                        <div className='nav-items' >
                        <div className='icon' onClick={()=>props.scrollHandler(item.action)} >
                            {item.icon && React.createElement(images[item.icon])}
                        </div>
                          <div className={`divide ${lastIndex}`} ></div>
                        </div>
                      </li>
                    </div>
                );
              })
            }
          </ul>
       </div>
  )
}

export default NavBar;