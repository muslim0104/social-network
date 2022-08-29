import {messageType} from "../../state";
import {v1} from "uuid";

const initialState:messageType[] = [
    {name: 'Муслим', message: 'Ассаламу Алайкум', id: v1()},
    {name: 'Муслим', message: 'Как ты?', id: v1()},
    {name: 'Абу-Муслим', message: 'Норм', id: v1()},
    {name: 'Муслим', message: 'Я делаю соцсеть', id: v1()},
    {name: 'Абу-Муслим', message: 'Удачи', id: v1()},
    {name: 'Муслим', message: '(-:', id: v1()}
]
export type ActionType = ReturnType<typeof messageAC>

export function dialogReducer(state= initialState, action: ActionType):messageType[] {


    switch (action.type) {
        case "ADD-MESSAGE": {
            let message = {name: "Я", message: action.message, id: v1()}
            console.log('222222222222222222222')

            return [...state, message]
        }
        default:
            return state
    }
}

export const messageAC = (message: string) => {
    return {
        type: "ADD-MESSAGE",
        message: message

    } as const
}


