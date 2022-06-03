import React from "react"
import main from"./img/img_main/girl-and-pet.png"
import './css/style.css'
class Mains extends React.Component{
    render(){
        return(
            <div className="right_home">
            <div className="color_right">
                <div className="color_right_mar">
            <img src={main} alt="" className="right_img"/>
        </div>
    </div>
    </div>
        )
    }
}
export default Mains
