import React, {useEffect, useState} from "react";
import './style.css'
import {CardComp} from "../cards/cardComp";
import {deleteCurrentList} from "../board/trelloApiFunctions";
import {UpdateCards, getCardData, getCardDataObject, loader, loaderOn, updateList} from "../../actions/Actions";
import {useDispatch, useSelector} from "react-redux";
import {createNewCard, fetchCardsData} from "../../urls/FetchApi";
import Spinner from "../spinner";


export function CurrentList(props) {

    const dispatch = useDispatch();
    const cardDataObjects = useSelector((state) => state.cards)
    let currentListID = props.currentList.id;
    const [newCardName,setCardName] = useState("")
    console.log("list ID",currentListID)


    useEffect(() =>{ (async ()=>{
        try {
            var fetchedCards = await fetchCardsData(props.currentList.id)
            var currListID = props.currentList.id
            var listCurrData = {}
            listCurrData[currListID] = fetchedCards.data || []
            console.log("successfully fetched cards data for id : ", fetchedCards.data)
            console.log("$$$$$$$cardDataObject", cardDataObjects)
            let cardDataOfList = fetchedCards.data || []
            dispatch({type: getCardData, payload: cardDataOfList})
            dispatch({type: getCardDataObject,id: props.currentList.id,payload: cardDataOfList})
        }
        catch (err){
            console.log('errrrrrrrrrrrrr fetching cards',err)
        }

    })()}, [currentListID,cardDataObjects.updateCards])

    function removeList() {
        deleteCurrentList(props.currentList.id)
            .then((res) => {
                dispatch({type: UpdateCards})
                dispatch({type: updateList})
            })
            .catch((err) => console.log("error while deleting list", err))
    }

    function getCardName (newCardName,listID) {
        if(newCardName===''){
            return
        }
        dispatch({type:loader, payload: loaderOn})
        createNewCard(newCardName, listID)
            .then((response)=>{
                console.log("created new card ::", response)
                dispatch({type: UpdateCards})
                setCardName('')
                dispatch({type:loader, payload: ''})
            })
            .catch((err)=>{
                console.log("error while creating ::",err)
            })
    }

    return (
        <div className="currentList">
            <div className="listWrapper">
                <h4>{props.currentList.name}</h4>
                <h5 className="deleteCross" onClick={() => removeList(props.currentList.id)}>❌</h5>
            </div>

            <div>
                {cardDataObjects[props.currentList.id]===undefined? null : cardDataObjects[props.currentList.id].map((currentCard,index) => {
                    return (
                        <CardComp listName = {props.currentList.name} cardDetails = {currentCard} index = {index}/>)
                })
                }
                <input type="textbox" placeholder={"Add new card"} className="addNewCard" value={newCardName} onChange={(e)=> setCardName(e.target.value)}></input>
                <button className={"cardBtn"} onClick={()=> getCardName(newCardName,currentListID)}>Add card</button>

            </div>
        </div>
    )
}