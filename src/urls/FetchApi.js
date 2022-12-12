import axios from 'axios'
export function fetchBoardData() {

    return axios.get('https://api.trello.com/1/members/me/boards?key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab')
}

export function fetchListData(boardId) {
    return axios.get(`https://api.trello.com/1/boards/${boardId}/lists?key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`)
}

export function createBoard(boardName) {
    const BoardUrl = `https://api.trello.com/1/boards/?name=${boardName}&key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    return axios.post(BoardUrl)
}

export const createList = (listName, boardId) => {
    const ListUrl = `https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    return axios.post(ListUrl)

}

export const deleteList = (listId) => {
    const deleteListUrl = `https://api.trello.com/1/lists/${listId}/closed?value=true&key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    return axios.put(deleteListUrl)
}

export const fetchCardsData = (listId) => {
    const CardsUrl = `https://api.trello.com/1/lists/${listId}/cards?key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    return axios.get(CardsUrl)
}

export const createNewCard = (cardTitle,listId,)=>{
    const newCard = `https://api.trello.com/1/cards?name=${cardTitle}&idList=${listId}&key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    if(cardTitle){
        return axios.post(newCard)
    }
}

export const deleteCard = (cardId)=>{
    const cardUrl = `https://api.trello.com/1/cards/${cardId}?key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    return axios.delete(cardUrl)
}

export const getCheckLists = (cardId)=>{
    const getCheckListsUrl= `https://api.trello.com/1/cards/${cardId}/checklists?key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    return axios.get(getCheckListsUrl);
}

export const addCheckList = (checkListTitle,cardId)=>{
    const checkListUrl = `https://api.trello.com/1/checklists?name=${checkListTitle}&idCard=${cardId}&key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    if(checkListTitle){
        return axios.post(checkListUrl)
    }
}

export const deleteCheckList = (checkListId)=>{
    const deleteUrl = `https://api.trello.com/1/checklists/${checkListId}?key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    return axios.delete(deleteUrl)
}

export const getCheckItems = (checkListId) => {
    const checkItemsUrl = `https://api.trello.com/1/checklists/${checkListId}/checkItems?key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    return axios.get(checkItemsUrl)
};

export const updateCheckItem = (cardId, checkItemId, checkedStatus) => {
    const upgradeCheckItemUrl = `https://api.trello.com/1/cards/${cardId}/checkItem/${checkItemId}?state=${checkedStatus}&key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    return axios.put(upgradeCheckItemUrl)

};

export const createCheckItem = (checkListId,checkItemTitle) => {
    const createCheckItemUrl = `https://api.trello.com/1/checklists/${checkListId}/checkItems?name=${checkItemTitle}&key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    if (checkItemTitle) {
        return axios.post(createCheckItemUrl)
    }
};

export const deleteCheckItem = (checkListId,checkItemId) => {
    const deleteCheckItemUrl = `https://api.trello.com/1/checklists/${checkListId}/checkItems/${checkItemId}?key=3809ed5e6e7982289e01cb5f37faa707&token=5fe724fe933bd80756bc47a7b98a7be7051cf565e3a703fb39700cd6b95fcaab`
    return axios.delete(deleteCheckItemUrl)
}
  
  



