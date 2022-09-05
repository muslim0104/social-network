import {newPostType} from "../../state";

type stateType={
    posts:newPostType[],
    profile:any
}

let initialState = {
     posts:[{message: 'Ghbdtn', likes: 1, id: 1}],
profile:null
    }

    upgradePost: "It-Kamasutra"

type ActionType = ReturnType<typeof postAC | typeof userProfileAC>

export function profileReducer(state: stateType = initialState, action: ActionType): stateType {
    if (action.type === "ADD-POST") {


        let post = {message: action.post, id: 5, likes: 0}
        return {...state,posts:[...state.posts]}
    } else if (action.type === 'SET-USER-PROFILE') {
        return {...state, profile: action.profile}
    } else return state
}

export const postAC = (post: string) => {
    return {

        type: "ADD-POST",
        post

    } as const
}
export const userProfileAC = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}