import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createList, fetchCardsData, fetchListData} from "../../urls/FetchApi";
import {UpdateCards, getListData, loader, loaderOn, updateList} from '../../actions/Actions';
import {CurrentList} from "./currentList";
import './style.css'
import Modalx from "../modalx";

function ListComp() {

    let boardId = localStorage.getItem('boardId')
    const listData = useSelector((state) => state.lists.listData)
    const listStateData = useSelector((state) => state.lists)
    const updateCards = useSelector((state) => state.cards.UpdateCards)
    const cardDataObject = useSelector((state) => state.cards)
    const allCardsDetails = {}
    console.log("listDATA", listData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type:loader, payload: loaderOn})
        fetchListData(boardId)
            .then((fetchedListData) => {
                console.log("received list data", fetchedListData)
                var listDataOfBoard = fetchedListData.data
                dispatch({type: getListData, payload: listDataOfBoard})
                dispatch({type:loader, payload: ''})
            }).catch((err) => {
            console.log("error while fetching list data::", err)
        })
    }, [updateCards,listStateData[updateList] ])

    // (fetchedListData.data).forEach((item)=>{
    //     var currListId = item.id
    //     dispatch({type: getCardDataObject, payload: {currListId: []}})
    //     console.log("+++++++++++++++========",cardDataObject)
    // })

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