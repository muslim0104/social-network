type ActionType=ReturnType<typeof actionCreatorFriendsReducer>

const initialState= [
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
]


export const friendsReducer=(state:any=initialState,action:ActionType)=> {
 switch (action.type) {
  case "FRIENDS":
   return [...state]

  default: return state
 }
 }

 function actionCreatorFriendsReducer() {
return {type:"FRIENDS"} as const
 }