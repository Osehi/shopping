import React from "react";
import { NavLink } from "react-router-dom";

import { headerLinks } from "../../../data/metadata.json";

import "./HeaderNav.css";

export default function HeaderNav () {
    return (
        <div className='Header-links'>
            <ul>
                {headerLinks.map(({name, path, category, categoryItems}, i) => (
                    <li key={i}>
                        <NavLink to={path}>
                            {name}
                            <div className='links-categories'>
                                    <ul>
                                        {category.map((category, index) => (
                                            <li key={index}>{category}
                                                <ul>
                                                    {categoryItems[index].map((items) => (
                                                        <li key={items}>{items}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
