import React from 'react';
import {store} from "../../redux-store";
import {MapDispatchToProps} from "react-redux";
import {UsersPropsType} from "./UsersContainer";
import Preloader from "./Preloader";
import {NavLink} from "react-router-dom";

type PropsType = {
    clickHandler: (pageNumber: number) => void
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalCount: number
    isFetching:boolean
}
// type UsersPresentPropsType=ObjectProps & UsersPropsType
export const Users = (props: PropsType) => {

    let users = store.getState().usersPage.users.map(u => {
        let photo = "https://cdn-icons-png.flaticon.com/512/219/219988.png";
        return (
            <div>
                <b>{u.name}</b>
                <ul>
                    <NavLink to={"/profile/"+u.id}>   <img src={photo} alt="Авы" width={"80px"}/></NavLink>


                    {u.follow ? <button onClick={() => props.follow(u.id)}> Unfollow</button> :
                        <button onClick={() => props.unfollow(u.id)}>Follow</button>}
                    <hr/>
                </ul>
            </div>)
    });

    let page = props.totalCount / props.currentPage


    let arr = []
    for (let i = 1; i <= page; i++) {
        arr.push(i)
    }


    return (
        <>
            {
                arr.map(i => {
                    return props.currentPage === i ? <h1>{i}</h1> :
                        <span onClick={() => props.clickHandler(i)}>{i}</span>
                })
            }
            {users}

        </>

    );
};

