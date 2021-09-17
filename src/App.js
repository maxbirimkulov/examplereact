import React,{useEffect, useState, useRef} from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import Header from "./components/header/Header";
import './app.css'
import AddTodo from "./components/addTodo/AddTodo";
import TodoList from "./components/todoList/todoList";


function App() {
    const [todoName, setTodoName] = useState('');
    const [todoArr, setTodoArr] = useState([]);
    const [status, setStatus] = useState('all');
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                THREE: THREE,
                backgroundColor: 0xf0e20,
                color: 0x8e7174,
                maxDistance: 22.00,
                points: 20.00,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);


    useEffect(()=>{
        setTodoArr(JSON.parse(localStorage.getItem('array')));
    },[]);

    useEffect(()=>{
        localStorage.setItem('array', JSON.stringify(todoArr));
    },[todoArr]);

    return (
        <>
            <div className='vanta' ref={myRef}>
            </div>
            <div className='content'>
                <Header/>
                <AddTodo setStatus={setStatus} status={status} todoName={todoName} setTodoName={setTodoName} setTodoArr={setTodoArr} todoArr={todoArr}/>
                <TodoList  setTodoName={setTodoName} todoArr={todoArr} setTodoArr={setTodoArr} status={status} setStatus={setStatus}/>
            </div>

            </>

    );
}

export default App;
