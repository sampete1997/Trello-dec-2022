import React, {useEffect, useState} from "react";
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
    getBoardData,
    getBoardName,
    getBoardId,
    isCreate,
    UpdateRedux,
    createBoardNameMethod
} from "../../actions/Actions";
import {fetchBoardData, createBoard} from "../../urls/FetchApi";
import Modalx from "../modalx";

export default function Board() {
    const dispatch = useDispatch()
    const boardData = useSelector((state) => state.board.boardData)
    const boardId = useSelector((state) => state.board.boardId)
    const boardName = useSelector((state) => state.board.boardName)
    const createName = useSelector((state) => state.modalx.createBoardName)
    const updateRedux = useSelector((state) => state.board.updateRedux)
    // const navigate = useNavigate();
    //  const boardCreate = (createName) =>{
    //     createBoard(createName)
    //         .then(() => {
    //             dispatch({type: UpdateRedux})
    //             dispatch({type: createBoardNameMethod, payload: ''})
    //         })
    //         .catch(er => console.log('err while creating board', er))
    // }

    useEffect(() => {
        fetchBoardData()
            .then(res => res.data)
            .then((fetchedData) => {
                dispatch({type: getBoardData, payload: fetchedData})
            })
            .catch((e) => console.log('err while fetching data from Trello boards API', e))

    }, [ updateRedux])

    console.log('boardData', updateRedux, boardData);
    return (

        <div className="board">
            {boardData.map((currBoard) => {
                    return (
                        <Link className="links" key={currBoard.id} to={'/board'} onClick={() => {
                            dispatch({type: getBoardId, payload: currBoard.id})
                            localStorage.setItem('boardId', currBoard.id)
                        }}>
                            < div key={currBoard.id} className="BoardContainer">
                                <h4>{currBoard.name}</h4>
                            </div>
                        </Link>
                    )
                }
            )}
            <div className="newBoard">
                <h4>Remaining boards are {10 - boardData.length}</h4>
                <Modalx createBoard="true"/>
            </div>
        </div>
    )
}