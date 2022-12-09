import './App.css';
import { Route, Routes } from 'react-router-dom';
import Board from "./components/board";
import Modalx from "./components/modalx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Board/>} />
        {/*<Route path='/board' element={<ShowList/>}/>*/}
        <Route path='/card' element={<Modalx/>}/>
      </Routes>
    </div>
  );
}

export default App;
