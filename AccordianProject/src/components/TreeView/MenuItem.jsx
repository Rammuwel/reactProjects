import React, { useState } from 'react'
import MenuList from './MenuList'
import { FaPlus } from 'react-icons/fa';
import './style.css'

function MenuItem(item) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentlabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
        });
    }

    return (
        <li>
            <div className="menu-item">
                <p>{item.item.label}</p>
                {item.item && item.item.children && item.item.children.length ? (
                    <span onClick={() => handleToggleChildren(item.item.label)}>
                        {
                            displayCurrentChildren[item.item.label] ? '-' : '+'
                        }
                    </span>
                ) : null}
            </div>

            {item.item && item.item.children && item.item.children.length > 0 && displayCurrentChildren[item.item.label] ? (
                <MenuList list={item.item.children} />
            ) : null}
        </li>
    );
}

export default MenuItem