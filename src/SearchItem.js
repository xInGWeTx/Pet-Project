import React from "react"
import './css/style_gallery.css'
import './css/style_brand.css'
class SearchItem extends React.Component{
    constructor(props){
    super(props)
    this.state={
        dog:{},
        
}
this.getImg=this.getImg.bind(this)
    }
    componentDidMount(){
        this.getImg()
    }
    getImg(){
        let url = `https://api.thedogapi.com/v1/images/${this.props.dog.reference_image_id}`
        fetch(url,{
            method:"GET",
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Access-Conrol-Allow-Headers":"Origin, X-Requested-With,Content-Type,Accept",
                "x-api-key":"02d4aaa8-cc49-4be1-8531-143718f2c253"
            }
        })
        .then(response =>response.json())
                .then(response => {
                    this.setState({dog:response})
                })
    }
    render(){
        return(
            <div className="grid_item"><img src={this.state.dog.url} alt=""/></div>

        )
    }
}
export default SearchItem