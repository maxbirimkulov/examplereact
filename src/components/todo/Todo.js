import React from 'react';

const Todo = ({todoArr, setTodoArr, status}) => {
    const completedTodo = (id) => {
        setTodoArr(todoArr.map((item, idx) => {
            if (item.id === id) {
                return {...item, isCompleted: !item.isCompleted, isActive: !item.isActive}
            } else {
                return item
            }
        }));
    };
    const deleteTodo = (id) => {
        setTodoArr(todoArr.filter((item)=>{
            return item.id !== id
        }))
    };
    const recentTodo = (id) => {
        setTodoArr(todoArr.map((item) => {
            if (item.id === id) {
                return {...item, isDeleted: !item.isDeleted, }
            } else {
                return item
            }
        }))
    };
    const importantTodo = (id) => {
        setTodoArr(todoArr.map((item) => {
            if (item.id === id) {
                return {...item, isImportant: !item.isImportant}
            } else {
                return item
            }
        }))
    };

    const isChangeFunc = (id) => {
        setTodoArr(todoArr.map((item) => {
            if (item.id === id) {
                return {...item, isChange: !item.isChange}
            } else {
                return item
            }
        }))
    };

    return (
        <ul className='todoList__menu'>
            {todoArr.filter((item) => {
                if (status === 'active') {
                    return !item.isCompleted && !item.isDeleted
                } else if (status === 'completed') {
                    return item.isCompleted && !item.isDeleted
                } else if (status === 'recent'){
                    return item.isDeleted
                } else {
                    return item && !item.isDeleted
                }
            }).map((item, idx) => {
                return (
                    <li className={`todoList__item ${item.isImportant ? 'todoList__item_important' : ''}`}
                        key={item.id}>

                        <div className='todoList__left'>
                            <button
                                disabled={status === 'recent'}
                                type='button'
                                className={`todoList__item-btn ${item.isCompleted ? 'todoList__item-btn_active' : ''}`}
                                onClick={(e) => completedTodo(item.id)}> </button>

                            {item.isChange
                                ? <textarea className='todoList__textarea' defaultValue={item.name} onChange={(e) => {
                                    item.name = e.target.value
                                }
                                }/>
                                : <span
                                    className={`todoList__text  ${item.isCompleted ? 'todoList_text_active' : ''}`}>{item.name}</span>
                            }

                        </div>
                        <div className='todoList__right'>
                            {item.isChange ? <button className='todoList__save' type='button'
                                            onClick={() => isChangeFunc(item.id)}>save</button> : ''}

                            {status === 'recent'
                                ? ''
                                : !item.isChange && status !== 'completed'
                                ? <button type='button' className='todoList__edit-btn' onClick={() => isChangeFunc(item.id)}>
                                <i className="fas fa-edit"> </i>
                                </button>
                                : ''
                            }
                            {status === 'recent'
                                ? ''
                                : <button className='todoList__btn todoList__btn_important' type='button'
                                         onClick={() => importantTodo(item.id)}>Important
                                </button>
                            }

                            <button className={`todoList__btn ${status === 'recent' ? 'todoList__btn_recent' : 'todoList__btn_delete'} `} type='button'
                                    onClick={() => recentTodo(item.id)}>
                                {status === 'recent' ? 'Return' : 'Remove'}
                            </button>
                            {status === 'recent'
                                ? <button className='todoList__btn todoList__btn_delete' type='button'
                                          onClick={() => deleteTodo(item.id)}> Delete
                                 </button>
                                : ''
                            }
                        </div>

                    </li>
                )
            })}
        </ul>
    );
};

export default Todo;