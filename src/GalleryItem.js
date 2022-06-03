import React from "react"
import './css/style_gallery.css'
import './css/style_brand.css'
class GalleryItem extends React.Component{
    render(){
        return(
            <div className="grid_item"><img src={this.props.dog.url} alt=""/></div>

        )
    }
}
export default GalleryItem