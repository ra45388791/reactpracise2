import React, { useState } from "react";



// export default function TodoItem({ content, index, DeleteItem }) {
export default function TodoItem(props: { index: any; content: { index: React.Key | null | undefined; value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; deleteItem: (arg0: any) => void; }) {
    let indexNum = Number(props.index);

    // console.log(props);
    return (
        <>
            <div
                key={props.content.index}
                onClick={() => props.deleteItem(props.content.index)}
            >
                {indexNum += 1}. {props.content.value}
            </div>
        </>
    )


    // function handleClick(index) {

    //     console.log(index)
    // }

}