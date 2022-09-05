import React from "react";
import classes from './Profile.module.css'
import {store} from "../../redux-store";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {NavLink} from "react-router-dom";


export const Profile = (props: ProfileContainerPropsType): any => {


    let refArea = React.createRef<HTMLTextAreaElement>()


    const addPost = () => {
        props.postAC("Hello")

        if (refArea.current) {
            props.postAC(refArea.current?.value)
        }
    }


    return (


        <div>
            <textarea ref={refArea} value={refArea.current?.value}/>
            <div className={classes.btn_style}>
                <button onClick={addPost}>Добавить</button>
            </div>

            <div className={classes.image_flex}>
                <img src='https://images8.alphacoders.com/114/1143850.jpg' className={classes.image}/>


            </div>


        </div>
    )
}