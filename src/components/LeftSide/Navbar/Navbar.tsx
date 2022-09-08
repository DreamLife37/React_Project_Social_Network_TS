import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.activeLink}`}><NavLink to={'/profile'}
                                                              className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Profile </NavLink>
        </div>
        <div className={s.item}><NavLink to={'/dialogs/'}
                                         className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Messages </NavLink>
        </div>
        <div className={s.item}><NavLink to={'/news'}
                                         className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>News </NavLink>
        </div>

        <div className={s.item}><NavLink to={'/users'}
                                         className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Users </NavLink>
        </div>

        <div className={s.item}><NavLink to={'/profileSettings'}
                                         className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}>Profile settings </NavLink>
        </div>

    </nav>
}