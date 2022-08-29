import classes from "../Dialogs/dialogs.module.css";
import React from "react";

import {messageType} from "../../state";

type MessageType={
    message: string;
    // name: string;
}

 export function Message(props:MessageType){
    return       <div className={classes.message}>
        {/*<h5>{props.name}</h5>*/}
        {props.message}

    </div>
}
