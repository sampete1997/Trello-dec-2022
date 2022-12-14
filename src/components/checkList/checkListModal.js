import React, {useEffect, useState} from 'react';
import './style.css';
import {Button, Modal} from 'antd';
import {
    addCheckList,
    createCheckItem,
    deleteCheckItem,
    deleteCheckList,
    getCheckItems,
    getCheckLists, updateCheckItem
} from "../../urls/FetchApi";
import {useDispatch, useSelector} from "react-redux";
import {getCheckListItems, loader, loaderOn, updateCheckList} from "../../actions/Actions";

export const CheckListModal = (props) => {
        const [isModalOpen, setIsModalOpen] = useState(props.showModal);
        const [addCheckList, setAddCheckList] = useState(false);
        const [checkListData, setCheckListData] = useState([]);
        const [itemNewName, setItemNewName] = useState('')
        const checkListDataObject = useSelector((state) => state.checkList)
        const dispatch = useDispatch()

        useEffect(() => {
            getCheckLists(props.cardDetail.id)
                .then((checkListResData) => {
                    setCheckListData(checkListResData.data)
                    checkListResData.data.map((currCheckList) => {
                        getCheckItems(currCheckList.id)
                            .then((itemResData) => {
                                dispatch({
                                    type: getCheckListItems,
                                    checkListId: currCheckList.id,
                                    payload: itemResData.data
                                })
                            }).catch((err) => {
                            console.log("error while fetching checkListData", err)
                        })
                    })
                }).catch((err) => {
                console.log("error while fetching checkListData", err)
            })

        }, [checkListDataObject.checkListLoad])

        function removeCheckList(checkListID) {
            deleteCheckList(checkListID)
                .then((res) => {
                    console.log('removed checklist !', res)
                    dispatch({type: updateCheckList})
                })
                .catch((err) => {
                    console.log('error while deleting checklist :: ', err)
                })
        }


        function addNewItemToCheckList(itemName, checkListID) {
            if (itemName == '') {
                return
            }
            createCheckItem(checkListID, itemName)
                .then((res) => {
                    console.log("created Item for checklist ::", res)
                    setItemNewName('')
                    dispatch({type: updateCheckList})
                }).catch((err) => {
                console.log('error while creating Item :: ', err)
            })
        }

        const handleOk = () => {
            setIsModalOpen(false);
            props.hideModal(false)
        };

        const handleCancel = () => {
            setIsModalOpen(false);
            props.hideModal(false)
        };

        const addCheckListMethod = () => {
            setAddCheckList(true)
        }
        return (
            <>
                <Modal title={props.cardDetail.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p> from {props.listName}</p>
                    <div className="checklistContainer">
                        {addCheckList == true ?
                            <CreateNewCheckList setAddCheckList={setAddCheckList} cardDetails={props.cardDetail}/>
                            : <Button onClick={(event) => addCheckListMethod(event)}>Add new checklist</Button>}

                        {checkListData.map((checkList) => {
                            return (
                                <div>
                                    <div className="checklistWrapper">
                                        <h4>{checkList.name || "loading..."}</h4>
                                        <p className="deleteCheckList"
                                           onClick={() => {
                                               removeCheckList(checkList.id)
                                           }}>✖</p>
                                    </div>
                                    {checkListDataObject[checkList.id] === undefined ? null : checkListDataObject[checkList.id].map((item) => {
                                        return (
                                            <ItemComp cardItemId={props.cardDetail.id} checkListID={checkList.id} checkListItem={item}/>
                                        )
                                    })
                                    }
                                    <input type="textbox" placeholder={" Add new item"}
                                           onChange={(e) => setItemNewName(e.target.value)}
                                           value={itemNewName}
                                           className="AddItemWrapper"></input>
                                    <Button onClick={() => addNewItemToCheckList(itemNewName, checkList.id)}
                                            style={{background: "blueviolet", color: "white"}}>Add Item</Button>
                                </div>
                            )
                        })
                        }
                    </div>
                </Modal>
            </>
        );
    }
;

export function CreateNewCheckList(props) {
    const [checkListName, setCheckListName] = useState("");
    const dispatch = useDispatch()

    function addCheckListToCard(checkListTitle, cardId) {
        if (checkListTitle == '') {
            return
        }
        addCheckList(checkListTitle, cardId)
            .then((res) => {
                console.log("Created checklist ", res)
                props.setAddCheckList(false)
                dispatch({type: updateCheckList})

            })
            .catch((err) => {
                console.log("error occurred while creating checklist ", err)
            })
    }

    return (<>
            <input type="textbox"
                   value={checkListName}
                   onChange={(e) => setCheckListName(e.target.value)} className="newCheckList"
                   placeholder={" New checklist name"}/>
            <Button style={{background: "blue", color: "white"}}
                    onClick={(e) => addCheckListToCard(checkListName, props.cardDetails.id)}>Add checklist</Button>
        </>
    )
}

export function ItemComp(checkListProps) {
    const dispatch = useDispatch()
    const status = checkListProps.checkListItem.state ==="complete" ? true : false
    function removeItem(checkListID, itemID) {
        deleteCheckItem(checkListID, itemID)
            .then((res) => {
                console.log("item deleted ! ::", res)
                dispatch({type: updateCheckList})
            }).catch((err) => {
            console.log("error while deleting item :: ", err)
        })
    }

    function updateItemStatus(cardId, checkItemId, checkedStatus){
        updateCheckItem (cardId, checkItemId, checkedStatus)
            .then((res) => {
                console.log("item status changed ! ::", res)
                dispatch({type: updateCheckList})
            }).catch((err) => {
            console.log("error while status update of item :: ", err)
        })
    }

    return (<div className="itemContainer">
        <input type="checkbox" checked={status} onChange={(e)=>updateItemStatus(checkListProps.cardItemId, checkListProps.checkListItem.id, e.target.checked)}/>
        {checkListProps.checkListItem.state ==="complete" ? <label style={{textDecoration:"line-through"}} >{checkListProps.checkListItem.name}</label>
            :<label className="itemLabel">{checkListProps.checkListItem.name}</label>}
        <p onClick={() => removeItem(checkListProps.checkListID, checkListProps.checkListItem.id)}
           className="deleteCheckListItem">➖</p>
    </div>)
}
