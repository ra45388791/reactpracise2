//看到這段 https://react.dev/learn#conditional-rendering
import "./list/list"
import List from "./list/list"
import "./photo/photo"
import Photo from "./photo/photo"


const btnStyle = {
    color: "white",
    bgcolor: "blue",
    height: "40px",
    width: "100px"
}
let addCount = 0

let isList = false


function MyButton() {
    return (
        <div className="btn">
            <button style={
                {
                    "color": btnStyle.color,
                    "background-color": btnStyle.bgcolor,
                    "height": btnStyle.height,
                    "width": btnStyle.width
                }
            }
            >測試按鈕</button>

            {addCount}
            
            {/* if判斷要顯示哪一個組件 */}
            {isList ? (<List />) : (<Photo />)}
        </div >
    );
}

export default MyButton;