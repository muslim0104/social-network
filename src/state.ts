import {profileReducer} from "./components/reducers/profile-reducer";
import { dialogReducer} from "./components/reducers/dialog-reducer";
import {v1} from "uuid";

type StoreType = {

    _state: StateType

    subscriber: (observer: () => void) => void

    newState: (state:StateType) => void
    getState: () => void



}

type ActionType={
    type:string
    parameter:any
}

export let story: StoreType;
story = {

    getState () {
        return this._state
    },

    _state: {

        friends: [
            {
                name: 'Ruslan',
                avatar: 'https://vjoy.cc/wp-content/uploads/2020/12/kartinki-na-avatarku-dlya-parnej-i-muzhchin-27.jpg',
                id: 1
            },
            {
                name: 'Said',
                avatar: 'https://bipbap.ru/wp-content/uploads/2021/07/1133ea1de4e69bd760056f2c04e90920.jpg',
                id: 2
            },
            {
                name: 'Deni',
                avatar: 'https://proprikol.ru/wp-content/uploads/2022/01/kartinki-dlya-gejmerov-na-avu-41-650x1155.jpg',
                id: 3
            }
        ],



        messages: [
            {name: 'Муслим', message: 'Ассаламу Алайкум',id:v1()},
            {name: 'Муслим', message: 'Как ты?',id:v1()},
            {name: 'Абу-Муслим', message: 'Норм',id:v1()},
            {name: 'Муслим', message: 'Я делаю соцсеть',id:v1()},
            {name: 'Абу-Муслим', message: 'Удачи',id:v1()},
            {name: 'Муслим', message: '(-:',id:v1()}
        ],

        newPost: [
            {message: 'Ассаламу алайкум', likes: 10, id: 1},
            {message: 'Ваалайкум ассалам', likes: 37, id: 2},
            {message: 'Как ты?', likes: 12, id: 3},
            {message: 'Норм', likes: 18, id: 4}
        ],

        upgradePost: "It-Kamasutra"
    },


    subscriber(observer: () => void) {
        this.newState = observer
    },


    newState(state:StateType) {
        console.log(this._state.messages)
    },

    // dispatch(action: ActionType) {
    //
    //
    //
    //     const newMessage = dialogReducer(this._state.messages, action)
    //
    //     this._state = {stor: newMessage}
    //
    //
    // }


};


export function actionCreatorAddPost(parametr: any) {
    return {type: "ADD-POST", parametr: parametr}
}
export function actionCreatorAddMessage(parametr:any) {
    return {type:"ADD-MESSAGE",parametr:parametr}
}


export type FriendType = {
    id: number;
    avatar: string;
    name: string;
}

export type UserType = {
    id: number;
    name: string;
    follow:boolean
    location:{city:string,country:string}
    photo:string
}
export type InitStateType={
    users:UserType[]
}

export type StateType = {

    friends: FriendType[]

    messages: messageType[]
    newPost: newPostType[]
    upgradePost: string


}

export type messageType = {
    name: string
    message: string
    id:string


}

export type newPostType = {
    message: string,
    likes: number
    id: number
}






