import React, { useState } from 'react';

function Main(props) {
    let todoInputValue = null;
    const [ todoContentArray, setTodoContentArray ] = useState([]);

    const handleTodoInputChange = (e) => {
        todoInputValue = e.target.value;
    }

    const handleAddClick = () => {
        setTodoContentArray([...todoContentArray, todoInputValue]);
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleTodoInputChange} />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <ul>
                {todoContentArray.map(todoContent => {
                    return (<li>{todoContent}</li>);
                })}
            </ul>
        </div>
    );
}

export default Main;