import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {store} from "../../redux-store";


export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                props.setUsers(res.data.items);
            })


    }

    let users =
        store.getState().usersPage.users.map(u => {
            let photo = "https://cdn-icons-png.flaticon.com/512/219/219988.png";
            return (
                <div>
                    <b>{u.name}</b>
                    <ul>
                        <img src={u.photo || photo} alt="Авы" width={"80px"}/>
             
                        {u.follow ? <button onClick={() => props.follow(u.id)}> Unfollow</button> :
                            <button onClick={() => props.unfollow(u.id)}>Follow</button>}
                        <hr/>
                    </ul>
                </div>)
        });


    return (
        <div>
            {users}
        </div>
    );
};
