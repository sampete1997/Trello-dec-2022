import React, {useEffect, useState} from "react";
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getBoardData, getBoardName, getBoardId, isCreate, UpdateRedux,createNameMethod} from "../../actions/Actions";
import {fetchBoardData, createBoard} from "../../urls/FetchApi";
import axios from "axios";
import {Button, div, Input, Modal} from "antd";
import Modalx from "../modalx";

export default function Board() {
    const dispatch = useDispatch()
    const boardData = useSelector((state) => state.board.boardData)
    const boardId = useSelector((state) => state.board.boardId)
    const boardName = useSelector((state) => state.board.boardName)
    const createName = useSelector((state) => state.modalx.createName)
    const updateRedux = useSelector((state) => state.board.updateRedux)
    // const navigate = useNavigate();
    function boardCreate(createName) {
        createBoard(createName)
            .then(() => {
                dispatch({type: UpdateRedux})
                dispatch({type: createNameMethod, payload: ''})
            })
            .catch(er => console.log('err while creating board', er))
    }

    useEffect(() => {
        fetchBoardData()
            .then(res => res.data)
            .then((fetchedData) => {
                dispatch({type: getBoardData, payload: fetchedData})
            })
            .catch((e) => console.log('err while fetching data from trail API', e))

    }, [updateRedux])

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
            })
            }
            <div className="newBoard">
            <Modalx CreateMethod={boardCreate(createName)}/>
            {/*    <button*/}
            {/*        onClick={() => boardData.length <= 10 && boardName !== '' ? boardCreate() : alert('You have excceded limit of boards')}>create*/}
            {/*        new board*/}
            {/*    </button>*/}
            {/*    <p>remaining boards {10 - boardData.length}</p>*/}
            </div>
        </div>
    )
}