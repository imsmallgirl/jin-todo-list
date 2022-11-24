import React, { useState } from "react";
import styled from "styled-components";
import ToDoItem from './ToDoItem'
import App from "./App";

const ToDoItemWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #aaa;
    padding: 20px 0;
`

const ToDoItemTit = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom : 10px;
`
const ToDoItemUl = styled.ul`
    list-style: none;
    width: 100%;
`

const TodoItemList = ({title, todoList, setTodoList, checkedList }) =>
    (
    <ToDoItemWrap>
        <ToDoItemTit>{title}</ToDoItemTit>
        <ToDoItemUl>
            {todoList.map((todoItem) => {
                if(todoItem.deleted) return null;
                
                if(checkedList !== todoItem.checked) return null;

                return (<ToDoItem
                key={todoItem.id}
                todoItem={todoItem}
                todoList={todoList}
                setTodoList={setTodoList}/>
                );
            })}
        </ToDoItemUl>
    </ToDoItemWrap>
    )

export default TodoItemList;
