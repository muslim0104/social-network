import React from "react";
import classes from "./post.module.css";


type propsType={
    title:string
    likes:number
}



export function Post(props:propsType){







    return(
        <div className={classes.now}>

        <div className={classes.post_parent}>

             <img src={'https://s9.travelask.ru/uploads/post/000/021/122/main_image/full-bbda119fd57a2614af47fa2790945628.jpg'} className={classes.post}/>
<div className={classes.message}>
            <div className={classes.span_style}>
            <div className={classes.classSpan}>{props.title}</div>
                <p>Нравится:{props.likes}</p>
            </div>

</div>

        </div>
        </div>
    )
}