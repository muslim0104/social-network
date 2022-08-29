
import React from "react";
import {NavLink} from "react-router-dom";
import classes from "../Dialogs/dialogs.module.css";

import {DialogElemType} from "../Dialogs/Dialogss";

export function DialogElem(props: DialogElemType) {
    return (




        <NavLink to={'/dialogs/'+props.id} activeClassName={classes.active} className={classes.name_block}> {props.name}</NavLink>




    )
}
