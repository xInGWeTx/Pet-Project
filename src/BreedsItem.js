import React from "react"
import './css/style_brand.css'
class BreedsItem extends React.Component{
    render(){
        return(
            <div className="grid_item"><img src={this.props.dog.url} alt=""/></div>

        )
    }
}
export default BreedsItem