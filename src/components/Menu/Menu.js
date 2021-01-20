import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './menu.scss'
import links from '../../router/router';

function Menu() {
  const [active, setActive] = useState('Home')

  const onClickItem = (item) => {
    setActive(item.name)
    console.log(active)
  }
  return (
    <ul className="menu">
      {links.map((item, idx) => {
        return (
          <Fragment key={idx + Math.random()}>
            <li key={idx + item.name} className="item" onClick={() => onClickItem(item)}>
              {item.name}
            </li>
            <ul key={idx + item.name + idx}
              className={`subItemContainer ${active}${item.name} ${+ item.name === active ? 'aaa' : 'bbb'}`}>
              {
                item.children.map((subItem, idx2) => {
                  return (
                    <li key={idx2 + subItem.name} className="subItem">

                      <Link to={subItem.path}>{subItem.name}</Link>
                    </li>)
                })
              }
            </ul>
          </Fragment>
        )
      })}
    </ul >
  )
}


export default Menu;