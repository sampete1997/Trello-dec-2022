import React, {useState} from 'react';
import {Button, Modal} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {createBoardNameMethod, createListNameMethod, updateList, UpdateRedux} from '../actions/Actions'
import {createNewBoard, createNewList} from "./board/trelloApiFunctions";

const Modalx = (props) => {
    // const isModalOpen = useSelector((state) => state.modalx.isModalOpen)
    const dispatch = useDispatch();
    const boardData = useSelector((state) => state.board.boardData)
    const createBoardName = useSelector((state) => state.modalx.createBoardName)
    const createListName = useSelector((state) => state.modalx.createListName)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setNameValue] = useState('')

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        getName()
        setIsModalOpen(false);
    };

    function getName() {
        if (!value) {
            alert('please enter name')
            return
        }
        // boardData.length <= 10 ? boardCreate() : alert('You have excceded limit of boards')
        if (props.createBoard == "true") {
            dispatch({type: createBoardNameMethod, payload: ''})
            dispatch({type: UpdateRedux})
            createNewBoard(value)
                .then(res => dispatch({type: UpdateRedux}))
                .catch(err => console.log(err))

        }
        if (props.createList == "true") {
            dispatch({type: createListNameMethod, payload: value})
            let boardId = localStorage.getItem("boardId")
            console.log("board ID list", boardId)
            createNewList(value, boardId)
                .then(res => dispatch({type: updateList}))
                .catch(err => console.log(err))
        }
        setIsModalOpen(false);
    }

    const setValue = (name) => {
        setNameValue(name)
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add new ➕
            </Button>
            <Modal title="Create New" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input type="text" onChange={(event) => setValue(event.target.value)}></input>
            </Modal>
        </>
    );
};

export default Modalx;