import React, {useState} from "react";
import './style.css'
import {deleteCard} from "../../urls/FetchApi";
import {useDispatch, useSelector} from "react-redux";
import {isOpenCard, loader, loaderOn, UpdateCards} from "../../actions/Actions";
import {CheckListModal} from "../checkList/checkListModal";

export function CardComp (props){
    const dispatch = useDispatch()
    let cardDetails = props.cardDetails
    const isOpen= useSelector((state)=>state.checkList.isModalOpen)
    const [checkListEnable, setCheckListEnable] = useState(false)
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

    function openCard (e){
        console.log("openCard")
        setCheckListEnable(true)
    }

    return (
        <div key={props.index} className="cardContainer">
            <p className="cardName" onClick={(e)=>openCard(e)}>{cardDetails.name} </p>
            <p className={"deleteItem"} onClick={()=>deleteItem(cardDetails.id)}>✖</p>
            {checkListEnable===true? <CheckListModal listName={props.listName} showModal={checkListEnable} hideModal={setCheckListEnable} cardDetail={cardDetails}/>:<></>}
        </div>
    )
}