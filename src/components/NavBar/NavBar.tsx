import React from "react";
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <nav className={classes.nav}>


                <div className={classes.nav_bar}>
                    <img
                        src='https://i.pinimg.com/originals/40/fd/62/40fd629ba597dda85384b36efb96a839.gif'
                        className={classes.nav_img}/>

                    <NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink>
                    <NavLink to={'/dialogs'} activeClassName={classes.active}>Messages</NavLink>
                    <NavLink to={'/users'} activeClassName={classes.active}>Users</NavLink>
                    <NavLink to={'/news'} activeClassName={classes.active}>News</NavLink>
                    <NavLink to={'/music'} activeClassName={classes.active}>Music</NavLink>
                    <NavLink to={'/settings'} activeClassName={classes.active}>Settings</NavLink>


                </div>
r
            </nav>

        </>
    )
}