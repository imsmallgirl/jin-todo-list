import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'

const AddWrap = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const AddInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    height: 50px;
    font-size: 16px;
    outline: none;
    color: #777;
    padding: 10px;
`;

const AddButton = styled.button`
    width: 100%;
    max-width: 50px;
    height: 50px;
    border: none;
    background-color: #a5d8ff;
    color : #1971c2;
`

const InputBox = ({todoList, setTodoList}) => {

    const [inputText, setInputText] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (event) => {
        setInputText(event.target.value);
    }

    const onClickAddBtn = () => {
        const nextTodoList = todoList.concat({
            id: todoList.length,
            inputText,
            checked: false,
            deleted : false,
        })

        if(inputText === ''){
            inputRef.current.focus();
            return;
        }

        setTodoList(nextTodoList)
        setInputText('');
        inputRef.current.focus();
            
    }

    return (
    <AddWrap>
        <AddInput onChange={onChangeInput} ref={inputRef} value={inputText} name="todoItem" type="text" placeholder="할 일을 입력하세요." />
        <AddButton onClick={onClickAddBtn}>추가</AddButton>
    </AddWrap>
)}

export default InputBox;