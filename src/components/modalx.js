import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {createNameMethod} from '../actions/Actions'

const Modalx = (CreateMethod) => {
    // const isModalOpen = useSelector((state) => state.modalx.isModalOpen)
    const dispatch = useDispatch();
    const boardData = useSelector((state) => state.board.boardData)
    const createName = useSelector((state) => state.modalx.createName)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value,setNameValue] = useState('')

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        getName()
        setIsModalOpen(false);
    };
   function getName() {
        if(!value){
            alert('please enter name')
        }
       // boardData.length <= 10 ? boardCreate() : alert('You have excceded limit of boards')
       dispatch({type: createNameMethod, payload: value})
       setIsModalOpen(false);
       CreateMethod(value)
    }
    const setValue = (name) => {
        setNameValue(name)
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <h4>Remaining Boards {10- boardData.length} </h4>
            <Button type="primary" onClick={showModal}>
                Add new ➕
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input type="text" onChange={(event) => setValue(event.target.value)}></input>
                {/*<Button type="primary" onClick={getName}>Add {createName} Name*/}
                {/*</Button>*/}
            </Modal>
        </>
    );
};

export default Modalx;