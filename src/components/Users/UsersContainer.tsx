import {RootState} from "../../redux-store";
import {Dispatch} from "redux";
import {addUserAC, followAC, unfollowAC} from "../reducers/users-reducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {UserType} from "../../state";

export  type UsersPropsType = MapStateToPropsUsers & MapDispatchToPropsUsers
type MapStateToPropsUsers = {
    users: UserType[]
}
type MapDispatchToPropsUsers = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers:(users:Array<UserType>)=>void

}

function mapStateToProps(state: RootState) {
    return {
        users: state.usersPage.users
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:Array<UserType>)=>{
            dispatch(addUserAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)

