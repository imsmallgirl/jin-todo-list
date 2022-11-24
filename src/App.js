import './App.css';
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import InputBox from './InputBox';
import TodoItemList from './ToDoItemList';

export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`

function App() {
  const [todoList , setTodoList ] = useState([]);
  
  return (
      <Container>
        <InputBox todoList={todoList} setTodoList={setTodoList}></InputBox>
        {/* 할일 리스트 */}
        <TodoItemList title={'할 일'} todoList={todoList} setTodoList={setTodoList} checkedList={false}/>
        {/* 완료된 리스트 */}
        <TodoItemList title={'완료한 항목'} todoList={todoList} setTodoList={setTodoList} checkedList={true} />
      </Container>
  );
}

export default App;
