import React from 'react';
import { StateType} from "../../state";
import classes from './friends.module.css'
import {store} from "../../redux-store";

export type friendType={
    avatar:string
    name:string
    id:number
}

 export type friendPropsType= {
     friends:Array<friendType>

 }
export const Friends = (props:friendPropsType) => {


 const friend=props.friends.map((el)=>{
     return(
         <>
            <div className={classes.center}> 
         <span>{el.name}</span>
     <img src={el.avatar} className={classes.img} />
     </div>



         </>
     )
     }



 )



    return (
        <>
     <>

     <div>
         {friend}
     </div>

     </>

        </>
    );
};

export default Friends;