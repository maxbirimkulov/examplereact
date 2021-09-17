import React from 'react';

const TodoFooter = ({todoArr, setTodoArr, status, setStatus,setTodoName}) => {
    const deleteCompleted = () => {
        setTodoArr(todoArr.filter((item) => {
            return !item.isCompleted
        }))
    };
    const changeStatus = (e) => {
        setStatus(e.target.value);
        setTodoName('')
    };
    return (
        <div className='todoList__footer'>
            <p className='todoList__numbers'>{todoArr.length} tasks to done {todoArr.filter((item)=> item.isCompleted).length}</p>
            <div className='todoList__footer-center'>
                <button type='button'
                        className={`todoList__footer-btn ${status === 'all' ? 'todoList__footer-btn_active' : ''}`}
                        value='all' onClick={(e) => changeStatus(e)}>All
                </button>
                <button type='button'
                        className={`todoList__footer-btn ${status === 'active' ? 'todoList__footer-btn_active' : ''}`}
                        value='active' onClick={(e) => changeStatus(e)}>Active
                </button>
                <button type='button'
                        className={`todoList__footer-btn ${status === 'completed' ? 'todoList__footer-btn_active' : 'l'}`}
                        value='completed' onClick={(e) => changeStatus(e)}>Completed
                </button>
            </div>
            <button className='todoList__delete-completed' type='button' onClick={() => deleteCompleted()}>Delete
                Completed
            </button>
        </div>
    );
};

export default TodoFooter;