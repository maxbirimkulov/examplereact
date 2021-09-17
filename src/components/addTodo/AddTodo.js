import React from 'react';


const AddTodo = ({setTodoName, todoName,setTodoArr, todoArr, status,setStatus}) => {

    const addTodoArr = (name) => {
        if (name.length !== 0){
            setTodoArr([...todoArr, {
                name:name,
                isActive:true,
                isCompleted:false,
                isDeleted:false,
                isImportant:false,
                isChange:false,
                id:Math.round(Math.random() * 1000)
            }]);
        }
        setTodoName('')
    };
    const changeRecent = () => {
        setStatus('recent');
        setTodoName('')
    };

    return (
        <div className='container'>
            <div className='add-todo'>
                <button disabled={status === 'completed'} className='add-todo__btn' type='button' onClick={()=> addTodoArr(todoName)}>+</button>
                <input
                    value={todoName}
                    className='add-todo__input'
                    type="text"
                    disabled={status === 'completed' || status === 'recent'}
                    placeholder={status === 'completed' || status === 'recent' ? 'Сan not be added' : 'Create a new todo...'}
                    onChange={(e)=> setTodoName(e.target.value)}
                    onKeyDown={(e)=> e.code === 'Enter' ? addTodoArr(todoName) : ''}
                />
                <button type='button' className={`recent-btn ${status === 'recent' ? 'recent-btn_active' : ''}`} value='recent' onClick={changeRecent}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
};

export default AddTodo;