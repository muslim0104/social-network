import {RootState} from "../../redux-store";
import {Dispatch} from "redux";
import {addUserAC, followAC, preloaderAC, selectUserAC, totalAC, unfollowAC} from "../reducers/users-reducer";
import {connect} from "react-redux";

import {UserType} from "../../state";
import {UsersAPIComponent} from "./UsersAPIComponent";

export  type UsersPropsType = MapStateToPropsUsers & MapDispatchToPropsUsers
type MapStateToPropsUsers = {
    users: UserType[]
    currentPage: number
    totalCount: number
    itPage: number
    isFetching:boolean
}
type MapDispatchToPropsUsers = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    selectUser: (p: number) => void
    setTotalCount:(count:number)=>void
    changeIsFetching:(isFetching:boolean)=>void


}

function mapStateToProps(state: RootState) {
    console.log(state)
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        itPage: state.usersPage.itPage,
        isFetching: state.usersPage.isFetching
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
        setUsers: (users: Array<UserType>) => {
            dispatch(addUserAC(users))
        },
        selectUser(p: number) {
            dispatch(selectUserAC(p))
        },
        setTotalCount(total:number){
          dispatch(totalAC(total))
        },
        changeIsFetching(isFetching:boolean){
            dispatch(preloaderAC(isFetching))
        }
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

