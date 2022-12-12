import React from "react";
import './style.css'
import {deleteCard} from "../../urls/FetchApi";
import {useDispatch} from "react-redux";
import {loader, loaderOn, UpdateCards} from "../../actions/Actions";

export function CardComp (props){
    const dispatch = useDispatch()
    let cardDetails = props.cardDetails
    function deleteItem(cardId){
        dispatch({type:loader, payload: loaderOn})
        deleteCard(cardId)
            .then((res)=>{
                dispatch({type:loader, payload: ""})
                dispatch({type: UpdateCards})
                console.log("card deleted!")
            })
            .catch((err)=>{
                console.log("error while deleting card ::",err)
            })
    }

    return (
        <div key={props.index} className="cardContainer">
            <p>{cardDetails.name} </p>
            <p className={"deleteItem"} onClick={()=>deleteItem(cardDetails.id)}>✖</p>
        </div>
    )
}