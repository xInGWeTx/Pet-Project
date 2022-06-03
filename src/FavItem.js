import React from "react"
import './css/style_brand.css'
class FavItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            like:{},
            
        }
        this.getImg=this.getImg.bind(this)
    }
    componentDidMount(){
        this.getImg()
    }
    getImg(){
        let url = `https://api.thedogapi.com/v1/images/${this.props.dog.image_id}`
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
                    this.setState({like:response})
                })
    }
    render(){ 
        return(
            <div className="grid_item"><img src={this.state.like.url} alt=""/></div>

        )
    }
}
export default FavItem