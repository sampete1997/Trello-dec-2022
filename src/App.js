import './App.css';
import { Route, Routes } from 'react-router-dom';
import Board from "./components/board";
import Modalx from "./components/modalx";
import ListComp from "./components/lists/list";
import {loader} from "./actions/Actions";
import Spinner from "./components/spinner";
import React from "react";
import {useSelector} from "react-redux";

function App() {
    const cardDataObjects = useSelector((state) => state.cards)
    return (
    <div className="App" style={{pointerEvents: cardDataObjects[loader] === true ? "none" : "auto"}}>
        {cardDataObjects[loader] === true ? <Spinner/> : <></> }
      <Routes>
        <Route path='/' element={<Board/>} />
        <Route path='/board' element={<ListComp/>}/>
        <Route path='/card' element={<Modalx/>}/>
      </Routes>
    </div>
  );
}

export default App;
