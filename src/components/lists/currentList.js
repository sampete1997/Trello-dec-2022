import React from "react";
import './style.css'
import {CardComp} from "../cards/cardComp";
import {deleteCurrentList} from "../board/trelloApiFunctions";
import {UpdateRedux} from "../../actions/Actions";
import {useDispatch} from "react-redux";


export function CurrentList(props) {

    const dispatch = useDispatch();

    function removeList() {
        deleteCurrentList(props.currentList.id)
            .then((res) => {
                dispatch({type: UpdateRedux})
            })
            .catch((err) => console.log("error while deleting list", err))
    }

    return (
        <div className="currentList">
            <div className="listWrapper">
                <h4>{props.currentList.name}</h4>
                <h5 className="deleteCross" onClick={() => removeList(props.currentList.id)}>❌</h5>
            </div>

            <div>
                <CardComp/>
            </div>
        </div>
    )
}