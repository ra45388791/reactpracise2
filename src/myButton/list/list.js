import React from 'react';

function List() {
    const note = [
        { id:1,title: "待辦1", content: "內容1" },
        { id:2,title: "待辦2", content: "內容2" },
        { id:3,title: "待辦3", content: "內容3" }
    ]

    const lists= note.map((e, index) => <div key={e.id}> {e.title} : {e.content} </div>)

    return (
        <div>
            {lists}
        </div>
    )

}


export default List;
