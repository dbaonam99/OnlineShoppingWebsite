import React, { useEffect, useState } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function DashboardTodoList(props) {
    const [todoList, setTodoList] = useState([])
    const [openNewTodo, setOpenNewTodo] = useState(false)
    const [openEditTodo, setOpenEditTodo] = useState("")
    const [newTodoText, setNewTodoText] = useState("")
    const [editTodoText, setEditTodoText] = useState("")

    useEffect(()=>{
        axios.get(`http://pe.heromc.net:4000/todos`)
            .then(res => {
                setTodoList(res.data)
            }
        )
    },[])

    const clickToCheck = (event)=>{
        const target = JSON.parse(event.target.id)
        const id = target.id 
        var isDone = ""
        if (target.isDone === true) {
            isDone = false
        } else {
            isDone = true
        }
        const virtualTodo = [...todoList]
        for (let i in virtualTodo) {
            if (id === virtualTodo[i]._id) {
                virtualTodo[i].isDone = isDone
            }
        }
        setTodoList(virtualTodo)
        axios.post('http://pe.heromc.net:4000/todos/update', {
            id: id,
            isDone: isDone
        }) 
    }

    const addNewTodo = (event)=>{
        event.preventDefault();
        const virtualTodo = [...todoList]
        const data = {
            todoContent: newTodoText,
            isDone: false,
            todoDate: new Date()
        }
        virtualTodo.push(data)  
        axios.post('http://pe.heromc.net:4000/todos', data)
        .then((res) => {   
            axios.get(`http://pe.heromc.net:4000/todos`)
                .then(res2 => {
                    setTodoList(res2.data)
                    setOpenNewTodo(false)
                }
            ) 
        }) 
    }  

    const deleteTodo = (event) => { 
        const id = event.target.id
        axios.post('http://pe.heromc.net:4000/todos', {
            delete: true,
            id: id
        }).then((res)=>{
            const virtualTodo = []
            for (let i in todoList) {
                if (todoList[i]._id !== id) {
                    virtualTodo.push(todoList[i])
                }
            }
            setTodoList(virtualTodo)
        })
    }

    const eidtTodoOnSubmit = (event) => {
        const id = event.target.id
        event.preventDefault();

        const virtualTodo = [...todoList]
        for (let i in virtualTodo) {
            if (id === virtualTodo[i]._id) {
                virtualTodo[i].todoContent = editTodoText
            }
        }
        setTodoList(virtualTodo)
        axios.post('http://pe.heromc.net:4000/todos/update', {
            edit: true,
            id: id,
            todoContent: editTodoText
        })
        setOpenEditTodo("")
    }

    return (
        <div className="topfive topfive-rv flex-col" style={{width: '40%'}}>
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={props.icon} className="icon"/>
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>{props.title}</p>
                </div>
                <div className="topfive-content">
                    <div className="todo-list" style={{height: '390px', overflowY: 'scroll'}}>
                        <div className="flex" style={{alignItems: 'center', justifyContent: 'space-between'}}>
                            <p className="todo-title" style={{margin: '0', marginLeft: '10px'}}>upcoming</p>
                            <div    
                                style={{marginRight: '5px', cursor: 'pointer'}}
                                onClick={()=>{
                                    if (openNewTodo) {
                                        setOpenNewTodo(false)
                                    } else {
                                        setOpenNewTodo(true)
                                    }
                                    setNewTodoText("")
                                }}
                            >
                                <FontAwesomeIcon icon={faPlus} style={{color: '#aaa', fontSize: '14px'}}/>
                            </div>
                        </div>
                        <form
                            onSubmit={addNewTodo}
                            className={openNewTodo ? "newtodo-input flex" : "newtodo-input closeNewTodo"}
                        >
                            <input 
                                value={newTodoText}
                                type="text" 
                                onChange={(event)=>{
                                setNewTodoText(event.target.value)
                            }}></input>
                            <button className="newtodo-btn btn">Add</button>
                        </form>
                        { todoList &&
                            todoList.reverse().map((item, index)=>{
                                if (item.isDone === false) {
                                    return(
                                        <div
                                            key={index}
                                            className="topfive-div"
                                        >
                                            <div className="topfive-div flex" style={{border: 'none', padding: '0'}}> 
                                                {
                                                    item.isDone === false && 
                                                    <div 
                                                        className="todo-check"
                                                        id={JSON.stringify({
                                                            id: item._id,
                                                            isDone: item.isDone
                                                        })}
                                                        onClick={clickToCheck}
                                                        >
                                                    </div>
                                                }
                                                {
                                                    item.isDone === true && 
                                                    <div 
                                                        className="todo-check-done"
                                                        id={JSON.stringify({
                                                            id: item._id,
                                                            isDone: item.isDone
                                                        })}
                                                        onClick={clickToCheck}
                                                        > 
                                                        <FontAwesomeIcon icon={faCheck} style={{pointerEvents: 'none', color: '#23bfea'}}/>
                                                    </div>
                                                }
                                                <p className="todo-text">{item.todoContent}</p>
                                                <div className="todo-action flex">
                                                    <div
                                                        id={item._id}
                                                        onClick={()=>{
                                                            if (openEditTodo === "") {
                                                                setOpenEditTodo(item._id)
                                                            } else {
                                                                setOpenEditTodo("")
                                                            }
                                                            setEditTodoText(item.todoContent)
                                                        }}>
                                                        <FontAwesomeIcon icon={faEdit} className="icon blue" style={{pointerEvents: 'none'}}/>
                                                    </div>
                                                    <div 
                                                        id={item._id}
                                                        onClick={deleteTodo}>
                                                        <FontAwesomeIcon icon={faTimes} className="icon red" style={{marginTop: '5px', fontSize: '12px', color: '#ffb3b7', marginLeft: '7px', pointerEvents: 'none'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <form
                                                id={item._id}
                                                onSubmit={eidtTodoOnSubmit}
                                                style={{marginTop: '10px', marginBottom: '0'}}
                                                className={openEditTodo === item._id ? "newtodo-input flex" : "newtodo-input closeNewTodo"}
                                            >
                                                <input 
                                                    style={{margin: '0', marginRight: '10px'}}
                                                    value={editTodoText}
                                                    type="text" 
                                                    onChange={(event)=>{
                                                        setEditTodoText(event.target.value)
                                                }}></input>
                                                <button className="newtodo-btn btn">Edit</button>
                                            </form>
                                        </div>
                                    )
                                } 
                                return null
                            })
                        }
                        <p className="todo-title" style={{marginTop: '20px'}}>finished</p>{todoList &&
                            todoList.reverse().map((item, index)=>{
                                if (item.isDone === true) {
                                    return (
                                        <div
                                            key={index}
                                            className="topfive-div"
                                        >
                                            <div className="topfive-div flex" style={{border: 'none', padding: '0'}}> 
                                                {
                                                    item.isDone === false && 
                                                    <div 
                                                        className="todo-check"
                                                        id={JSON.stringify({
                                                            id: item._id,
                                                            isDone: item.isDone
                                                        })}
                                                        onClick={clickToCheck}
                                                        >
                                                    </div>
                                                }
                                                {
                                                    item.isDone === true && 
                                                    <div 
                                                        className="todo-check-done"
                                                        id={JSON.stringify({
                                                            id: item._id,
                                                            isDone: item.isDone
                                                        })}
                                                        onClick={clickToCheck}
                                                        > 
                                                        <FontAwesomeIcon icon={faCheck} style={{pointerEvents: 'none', color: '#23bfea'}}/>
                                                    </div>
                                                }
                                                <p className="todo-text">{item.todoContent}</p>
                                                <div className="todo-action flex">
                                                    <div
                                                        id={item._id}
                                                        onClick={()=>{
                                                            if (openEditTodo === "") {
                                                                setOpenEditTodo(item._id)
                                                            } else {
                                                                setOpenEditTodo("")
                                                            }
                                                            setEditTodoText(item.todoContent)
                                                        }}>
                                                        <FontAwesomeIcon icon={faEdit} className="icon blue" style={{pointerEvents: 'none'}}/>
                                                    </div>
                                                    <div 
                                                        id={item._id}
                                                        onClick={deleteTodo}>
                                                        <FontAwesomeIcon icon={faTimes} className="icon red" style={{marginTop: '5px', fontSize: '12px', color: '#ffb3b7', marginLeft: '7px', pointerEvents: 'none'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <form
                                                id={item._id}
                                                onSubmit={eidtTodoOnSubmit}
                                                style={{marginTop: '10px', marginBottom: '0'}}
                                                className={openEditTodo === item._id ? "newtodo-input flex" : "newtodo-input closeNewTodo"}
                                            >
                                                <input 
                                                    style={{margin: '0', marginRight: '10px'}}
                                                    value={editTodoText}
                                                    type="text" 
                                                    onChange={(event)=>{
                                                        setEditTodoText(event.target.value)
                                                }}></input>
                                                <button className="newtodo-btn btn">Edit</button>
                                            </form>
                                        </div>
                                    )
                                }
                                return null
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}