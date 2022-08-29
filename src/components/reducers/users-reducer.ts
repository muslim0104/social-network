

type ActionType = ReturnType<typeof followAC | typeof unfollowAC | typeof  addUserAC>

export type UserType = {
    id: number;
    name: string;
    follow:boolean
    location:{city:string,country:string}
    photo:string
}
type StateType={
 users:Array<UserType>
}
let initialState = {
   users:[]
}


export function UserReducer(state:StateType  = initialState, action: ActionType) {
    if (action.type === "FOLLOW") {
        return {...state,users:state.users.map(u => u.id === action.userId ? {...u, follow: false} : u)}
    } else if (action.type === "UNFOLLOW") {
        return {...state,users:state.users.map(u => u.id === action.userId ? {...u, follow: true} : u)}
    }

    else if (action.type==="ADD-USER"){
            return {...state, users:action.users}
    }
    else {

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
export function addUserAC(users:Array<UserType>) {
    return {
        type: "ADD-USER",
        users

    } as const
}