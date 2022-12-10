import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createList, fetchListData} from "../../urls/FetchApi";
import {getListData} from '../../actions/Actions';
import {CurrentList} from "./currentList";
import './style.css'
import Modalx from "../modalx";

function ListComp() {

    let boardId = localStorage.getItem('boardId')
    const listData = useSelector((state) => state.lists.listData)
    const updateRedux = useSelector((state) => state.board.updateRedux)
    console.log("listDATA", listData)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchListData(boardId)
            .then((fetchedListData) => {
                console.log("received list data", fetchedListData)
                dispatch({type: getListData, payload: fetchedListData.data})
            }).catch((err) => {
            console.log("error while fetching list data::", err)
        })
    }, [updateRedux])

    return (
        <div className="listContainer">
            {
                listData.map((currentListData) => {
                    return (
                        <CurrentList currentList = {currentListData} />
                    )
                })
            }

            <div className = "newList">
                <Modalx createList = "true"/>
            </div>
        </div>
    )

}

export default ListComp