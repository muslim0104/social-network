import {constants} from "fs";


type ActionType = ReturnType<typeof followAC
    | typeof unfollowAC
    | typeof addUserAC
    | typeof selectUserAC
    | typeof totalAC
    | typeof preloaderAC>


export type UserType = {
    id: number;
    name: string;
    follow: boolean
    location: { city: string, country: string }
    photo: string
}
type StateType = {
    users: Array<UserType>
    currentPage: number,
    totalCount: number
    itPage: number,
    isFetching: boolean
}
let initialState = {
    users: [],
    currentPage: 4,
    totalCount: 29,
    itPage: 2,
    isFetching: false
}


export function UserReducer(state: StateType = initialState, action: ActionType) {
    if (action.type === "FOLLOW") {
        return {...state, users: state.users.map(u => u.id === action.userId ? {...u, follow: false} : u)}
    } else if (action.type === "UNFOLLOW") {
        return {...state, users: state.users.map(u => u.id === action.userId ? {...u, follow: true} : u)}
    } else if (action.type === "ADD-USER") {
        return {...state, users: action.users}
    } else if (action.type === "SELECT-USER") {
        return {...state, currentPage: action.currentPage}
    } else if (action.type === "SET-TOTAL-COUNT") {
        return {...state, totalCount: action.count}
    } else if (action.type === "TOGGLE-PRELOADER") {
        return {...state, isFetching: action.isFetching}

    } else {

        return state
    }


}

export function followAC(userId: number) {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export function unfollowAC(userId: number) {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}

export function addUserAC(users: Array<UserType>) {
    return {
        type: "ADD-USER",
        users

    } as const
}

export function selectUserAC(currentPage: number) {
    return {
        type: "SELECT-USER",
        currentPage
    } as const
}

export function totalAC(count: number) {
    return {
        type: "SET-TOTAL-COUNT",
        count
    } as const
}

export function preloaderAC(isFetching: boolean) {
    return {
        type: "TOGGLE-PRELOADER",
        isFetching
    } as const
}
