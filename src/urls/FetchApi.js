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
};

export const createList = (boardId, listName) => {

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
  
  



