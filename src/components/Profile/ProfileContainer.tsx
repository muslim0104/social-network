import React, {FC} from "react";
import {Post} from "./Post";
import {newPostType} from "../../state";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {store} from "../../redux-store";
import {Dispatch} from "redux";
import {postAC, userProfileAC} from "../reducers/profile-reducer";
import axios from "axios";
import Preloader from "../Users/Preloader";
import { withRouter } from "react-router-dom";


const ProfileContainer: FC<ProfileContainerPropsType> = (props)   => {


    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(res => {
 props.setUserProfile(res.data)
        })


    let p=props.posts.map(p=><Post title={p.message} likes={p.likes}/>)


//
// let action=actionCreatorAddPost()
    if (!props.profile){
        return <Preloader/>
    }
    return (


        <div>
        <Profile {...props} />
            {p}
            <img src={props.profile.photos.large} alt="xzxz"/>
        </div>
    )
}

type MapStatePropsType = {
    posts: newPostType[]
    profile:any
}
type MapDispatchPropsType = {
    postAC: (post: string) => void
    setUserProfile:(profile:any)=>void

}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

function mapStateToProps(state:ReturnType<typeof store.getState>): MapStatePropsType{
    return{
        posts:state.profilePage.posts,
        profile:state.profilePage.profile
    }

}
function mapDispatchToProps(dispatch:Dispatch): MapDispatchPropsType{
    return{
        postAC:(post: string)=>{
          dispatch(postAC(post))

      },
        setUserProfile:(profile:any)=>{
        dispatch(userProfileAC(profile))
        }
        }
    }

    let withUrlComponent=withRouter(ProfileContainer)
       export default connect(mapStateToProps,mapDispatchToProps)(withUrlComponent)