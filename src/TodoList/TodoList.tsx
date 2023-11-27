import React, { ChangeEvent, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { addFireBaseData, getFireBaseData } from "./script";



export default function TodoList() {

    const [inputValue, setInputValue] = useState("hello123")
    const [lists, setList] = useState([
        {
            index: 0,
            value: "123"
        },
        {
            index: 1,
            value: "456"
        }
    ])


    return (
        <>
            <div>
                <h2>learn React TodoList.</h2>
            </div>
            <div>
                <input
                    id="inputBox"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={handleBtnClick}>提交</button>
                <button onClick={firebaseTest}>firebaseTest</button>
            </div>
            <ul>
                {lists.map((e, index) => (
                    <TodoItem content={e} index={index} deleteItem={deleteItem} />
                ))}
            </ul>
        </>
    )

    function firebaseTest() {
        // FireBase 測試
        // addFireBaseData();//新增資料
        getFireBaseData();//取得資料
    }

    //動態更新輸入框
    function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
        setInputValue(e.target.value)
    }

    //新增資料
    function handleBtnClick() {
        const inputBox = document.querySelector('#inputBox') as HTMLInputElement;
        if (inputValue === "") {
            inputBox.focus();
            return
        }
        //按下按鈕要更新list
        const creactInputValue = {
            index: lists.length === 0 ? 0 : lists[lists.length - 1].index += 1,
            value: inputValue
        }
        setList([...lists, creactInputValue]);
        setInputValue("");
        inputBox.focus();
    }

    //過濾出除了傳入索引以外的內容
    function deleteItem(deleteIndex: string | number): void {
        const filterList = lists.filter(e => e.index !== deleteIndex);
        setList([...filterList]);
    }
}