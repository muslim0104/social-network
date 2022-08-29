import { newPostType} from "../../state";


let initialState= [
    {message: 'Ghbdtn', likes: 1, id: 1},

],
    upgradePost: "It-Kamasutra"

type ActionType=ReturnType<typeof postAC >

export function profileReducer(state:newPostType[]=initialState,action:ActionType): newPostType[] {
    if (action.type === "ADD-POST") {
        console.log('22222222222222222222222')

        let post = {message: action.post, id: 5, likes: 0}

  return [...state,post]
    }
   else  return state
}

export const  postAC=(post:string)=>{
    return {

        type:"ADD-POST",
        post

    } as const
}
