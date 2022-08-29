import React from 'react';
import classes from "./dialogs.module.css";
// import {NavLink} from "react-router-dom";
import {DialogElem} from "../DialogItem/DialogElem";
import {Message} from "../Message/Message";

import {actionCreatorAddMessage,  messageType, story} from "../../state";
import {useSelector} from "react-redux";
import {store} from "../../redux-store";
import {messageAC} from "../reducers/dialog-reducer";


export type DialogElemType = {
    name: string
    id: number

}


 export type DialogsPropsType={

    messages:messageType[]

     addPostBtn:(a:any)=>void




}

export function Dialogss (props:DialogsPropsType){

    let newName = store.getState().usersPage.users.map((el,index) => <DialogElem key={index} name={el.name} id={el.id} />)
    let newMessage =store.getState().messages.map((el) => <Message key={el.message} message={el.message}/>)
    let refArea = React.createRef<HTMLTextAreaElement>()




    return(
        <div>
            <textarea ref={refArea} value={refArea.current?.value}></textarea>
            <div className={classes.btn_style}>
            <button onClick={()=>props.addPostBtn(refArea)} >Отправить </button>
            </div>
            <div>
                <h5>{newName}</h5>

                <div>
                    {newMessage}
                </div>
            </div>


        </div>

)
}