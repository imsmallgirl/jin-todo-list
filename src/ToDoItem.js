import React , {useEffect, useRef, useState} from "react";
import styled from "styled-components";

const ToDoItemLi = styled.li`
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ToDoItemCheck = styled.input`
`

const ToDoItemContent = styled.span`
    font-size: 18px;
    margin: 0 30px;
`

const ToDoItemBtn = styled.button`
    font-size: 20px;
    background-color: transparent;
    border: none;
    margin: 0 10px;
    cursor: pointer;
`

const ToDoEditInput = styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid #aaa;
    margin: 0 30px;
    padding: 5px;
    font-size: 18px;
`

const ToDoItem = ({todoItem, todoList, setTodoList}) => {
    const [edited, setEdited] = useState(false);
    const [newInputText, setNewInputText] = useState(todoItem.inputText);

    const onChangeEditInput = (event) => setNewInputText(event.target.value)

    const onClickEditButton = () => {
        setEdited(true);
    }

    const onClickSubmitButton = () => {
        const nextTodoList = todoList.map((item) => ({
            ...item,
            inputText : item.id === todoItem.id ? newInputText : item.inputText,
        }));

        setTodoList(nextTodoList);
        
        setEdited(false);
    }

    const editInputRef = useRef(null)

    useEffect(() => {
        if(edited){
            editInputRef.current.focus();
        }
    }, [edited])

    const onChangeCheckbox = () => {
        const nextTodoList = todoList.map((item) => ({
            ...item,
            checked : item.id === todoItem.id ? !item.checked : item.checked
        }));
        setTodoList(nextTodoList);
    };

    const onClickDeleteButton = () => {
        if (window.confirm('지우시겠습니까?')) {
            const nextTodoList = todoList.map((item) => ({
                ...item,
                deleted : item.id === todoItem.id ? true : item.deleted,
            }))

            setTodoList(nextTodoList);
        }
    }

    return (
        <ToDoItemLi>
            <div>
                {/* 아이템 완료 체크 / 체크 해제를 위한 체크 박스 */}
                <ToDoItemCheck checked={todoItem.checked} onChange={onChangeCheckbox} type="checkbox" />
                {/* 아이템 내용 */}
                {edited ? 
                    (<ToDoEditInput type="text" ref={editInputRef} value={newInputText} onChange={onChangeEditInput}/>)
                    :
                    (<ToDoItemContent className={todoItem.checked ? 'checked' : ''}>{todoItem.inputText}</ToDoItemContent>)
                }
            </div>
            <div>
                {/* 수정 버튼 */}
                {!todoItem.checked ?(
                    edited ? (
                        <ToDoItemBtn className="xi-check-square-o" onClick={onClickSubmitButton} />
                    ) : (
                        <ToDoItemBtn className="xi-library-books-o" onClick={onClickEditButton}/>
                    )
                ) : null}
                
                {/* 삭제버튼 */}
                <ToDoItemBtn className="xi-trash" onClick={onClickDeleteButton}></ToDoItemBtn>
            </div>
        </ToDoItemLi>

    )
};
export default ToDoItem;