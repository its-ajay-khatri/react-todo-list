import React, { useState } from 'react';
import './App.css';
import ToDoLists from './Components/ToDoLists';

const App = (props) => {

  const [inputList, setInputList] = useState("");
  const [buttonClk, setbtnClick] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const clickEvent = () => {
    setbtnClick((oldItems) => {
      return[...oldItems, inputList];
    });
    setInputList('');
  }

  const deleteItems = (id) => {
    //console.log("deleted");

    setbtnClick((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
   <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1> ToDo List </h1>
        <br />
        <input type="text" placeholder='Add a Item' value={inputList} onChange={itemEvent}/>
        <button onClick={clickEvent}> + </button>
        <ol>
          {/* <li>{buttonClk} </li> */}
          {buttonClk.map((itemval, index) => {
            return <ToDoLists id={index} key={index} onSelect={deleteItems} text = {itemval} />
          })}
        </ol>
      </div>
   </div>
  );
}

export default App;
