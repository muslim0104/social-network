import { messageType, StateType} from "../state";
import {DialogElem} from "./DialogItem/DialogElem";
import {Message} from "./Message/Message";
import React from "react";
import {Dialogss} from "./Dialogs/Dialogss";
import {store} from "../redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {type} from "os";
import {message} from "antd";
import {messageAC} from "./reducers/dialog-reducer";


export type DialogElemType = {
    name: string
    id: string

}


export type DialogsPropsType = {
    store: typeof store


}

type MapDispatchPropsType={
    addPostBtn:(a:any)=>void
}
type MapStatePropsType={
    messages: messageType[]
}
export   type ConnectPropsType=MapDispatchPropsType & MapStatePropsType
 function  DialogContainer(props: ConnectPropsType) {




    const addPostBtn = (ref: any) => {
     if (ref.current) {
          messageAC(ref.current.value)
        }


    }

    return (
        <div>
            <Dialogss messages={props.messages} addPostBtn={props.addPostBtn}
                 />
        </div>)
}

function mapStateToProps(state:ReturnType<typeof store.getState>){
    return{
        messages:state.messages
    }

}
function mapDispatchToProps(dispatch:Dispatch){
  return{
      addPostBtn:(ref:any)=>{
          if (ref.current) {
              dispatch(messageAC(ref.current.value))
          }
      }
  }

}

export  default connect(mapStateToProps,mapDispatchToProps)(DialogContainer)
