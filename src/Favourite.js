import React from "react"
import FavItem from "./FavItem"
import './css/style_brand.css'
import './css/style_vot.css'
import './css/style_fav.css'
import search from './img/img_vot/Vector.png'
import smile from './img/img_vot/Vector (Stroke).png'
import like from './img/img_vot/Vector 348 (Stroke).svg'
import dis from './img/img_vot/Vector (Stroke)smile.png'
import arrow from './img/img_brand/Vector.png'
import Nav from './NavBar'
import{Link} from "react-router-dom";
class Favourites extends React.Component{
    constructor(props){
        super(props)
        this.state={
            votes:[],
            
        }
        this.getFav=this.getFav.bind(this)
    }
    componentDidMount(){
        this.getFav()
    }
    getFav(){
        let url =`https://api.thedogapi.com/v1/favourites`
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
                    this.setState({votes:response.reverse()})
                })
    }
    render(){
        return(
            <div className="right_dog">
            <Nav search={this.props.search} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
        <div className="main_right_dog">
            <div className="head_but">
            <Link to="/"><div className="arrow"><img className="arrow_brand_img"src={arrow}/></div></Link>
                <a href="" className="vot">FAVOURITES</a>
                
            </div>
            <div className="all_photos">
            {this.state.votes.map((dog)=>
    <FavItem dog={dog} key={dog.id}/>
    )}
        
        </div>
            </div>
        </div> 
        )
    }
}
export default Favourites