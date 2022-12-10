import {createBoard, createList, deleteList} from "../../urls/FetchApi";

export const createNewBoard = (createName) => {
    return new Promise((res, rej) => {
        createBoard(createName)
            .then((resp) => {
                console.log("board created successfully :: => ", resp)
                res(resp)
            })
            .catch((er) => {
                console.log('err while creating board', er)
            })
    })
}

export function createNewList(listName, boardId) {
    return new Promise((res, rej) => {
        createList(listName, boardId)
            .then((listCreateResponse) => {
                console.log("List created successfully :: => ", listCreateResponse)
                res(listCreateResponse)
            }).catch((err) => {
            console.log("error occurred while creaing new list==== ", err)
            rej(err)
        })
    })
}

export function deleteCurrentList(listID){
    return new Promise((res, rej) => {
        deleteList(listID)
            .then((listCreateResponse) => {
                console.log("List created successfully :: => ", listCreateResponse)
                res(listCreateResponse)
            }).catch((err) => {
            console.log("error occurred while creating new list==== ", err)
            rej(err)
        })
    })
}