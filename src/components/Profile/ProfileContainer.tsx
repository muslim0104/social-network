import React from "react";
import {Post} from "./Post";
import {newPostType} from "../../state";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {store} from "../../redux-store";
import {Dispatch} from "redux";
import {postAC} from "../reducers/profile-reducer";


const ProfileContainer = (props: ProfileContainerPropsType): any => {

    let posts = props.posts.map(p => <Post title={p.message} likes={p.likes}/>)
 let p=store.getState().profilePage.map(p=><Post title={p.message} likes={p.likes}/>)


//
// let action=actionCreatorAddPost()
    return (


        <div>
        <Profile posts={props.posts} postAC={props.postAC} />
            {p}
        </div>
    )
}

type MapStatePropsType = {
    posts: newPostType[]
}
type MapDispatchPropsType = {
    postAC: (post: string) => void
}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

function mapStateToProps(state:ReturnType<typeof store.getState>){
    return{
        posts:state.profilePage
    }

}
function mapDispatchToProps(dispatch:Dispatch){
    return{
        postAC:(post: string)=>{
          dispatch(postAC(post))
      }
        }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)