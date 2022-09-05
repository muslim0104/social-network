import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {store} from "../../redux-store";
import {spawn} from "child_process";
import {Users} from "./Users";
import Preloader from "./Preloader";


export let UsersAPIComponent = (props: UsersPropsType) => {


    function clickHandler(pageNumber: number) {
        props.changeIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=10`)
            .then(res => {
                props.changeIsFetching(false)
                props.selectUser(pageNumber)
                props.setUsers(res.data.items);
                props.setTotalCount(res.data.totalCount)
            })


    }

    return (
        !props.isFetching ?  <Users clickHandler={clickHandler} totalCount={props.totalCount} follow={props.follow}
                                   unfollow={props.unfollow} currentPage={props.currentPage}
                                   isFetching={props.isFetching}/>


            : <Preloader/>
    )

};
