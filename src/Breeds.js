import React from "react"
import './css/style_brand.css'
import './css/style_vot.css'
import BreedsItem from './BreedsItem'
import lupa from './img/img_vot/Vector.png'
import smile from './img/img_vot/Vector (Stroke).png'
import like from './img/img_vot/Vector 348 (Stroke).png'
import dis from './img/img_vot/Vector (Stroke)smile.png'
import arrrow from'./img/img_brand/Vector.png'
import top from'./img/img_brand/Vector_up.png'
import bot from './img/img_brand/Vector_boto.png'
import Nav from './NavBar'
import{Link} from "react-router-dom";
class Breeds extends React.Component{
    constructor(props){
        super(props)
        this.state={
            response:[],
            breeds:[],
            limit:5,
            order:"Random",
            breedId:"",
        }
        this.getData=this.getData.bind(this)
        this.changeCount=this.changeCount.bind(this)
        this.changeBreed=this.changeBreed.bind(this)
        this.changeOrder=this.changeOrder.bind(this)
        this.getBreeds=this.getBreeds.bind(this)
        
    }
    componentDidMount(){
            this.getData()
            this.getBreeds()
        }
        getData(){
            let url=`https://api.TheDogAPI.com/v1/images/search?breed_ids=${this.state.breedId}&limit=${this.state.limit}&order=${this.state.order}`
            fetch(url,{
                method: "GET",
                headers:{
                    "Access-Control-Allow-Origin":"*",
                    "Access-Conrol-Allow-Headers":"Origin, X-Requested-With,Content-Type,Accept",
                    "x-api-key":"02d4aaa8-cc49-4be1-8531-143718f2c253"
                }
            })
            .then(response =>response.json())
            .then(response => {
                this.setState({response:response})
            })
        }
        getBreeds(){
            let url =`https://api.thedogapi.com/v1/breeds`
            fetch(url,{
                method:"GET",
                headers:{
                    "Access-Control-Allow-Origin":"*",
                    "Access-Conrol-Allow-Headers":"Origin, X-Requested-With,Content-Type,Accept",
                    "x-api-key":"02d4aaa8-cc49-4be1-8531-143718f2c253"
                }
            })
            .then(response=>response.json())
            .then(response=>{
                this.setState({breeds:response})
            })
        }
        changeOrder(order){
            this.setState({order:order},
                this.getData)
        }
        changeCount(e){
            this.setState({limit:e.target.value},
                this.getData)
    
        }
        changeBreed(e){
            this.setState({breedId:e.target.value},
                this.getData)
        }
    render(){
        return(
            <div className="right_brand">
    <Nav search={this.props.search} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
    
    <div className="center_brand">
    <div className="head_brand">
    <Link to="/"><div className="arrow_brand"><img className="arrow_brand_img"src={arrrow}/></div></Link>
        <a href="" className="brand_but">BREEDS</a>
        <select onChange={this.changeBreed} className="all_brands">
            {this.state.breeds.map(breed=>
            <option value={breed.id} key={breed.id}>{breed.name}</option>
            )}
        </select>
        <select onChange={this.changeCount} className="limit">
            <option value="5">Limit: 5</option>
            <option value="10">Limit: 10</option>
            <option value="15">Limit: 15</option>
            <option value="20">Limit: 20</option>
        </select>
        <button className="top" onClick={()=>{this.changeOrder("DESC")}}><img src={top}/></button>
        <button className="botton_brand" onClick={()=>{this.changeOrder("ASC")}}><img src={bot}/></button>
</div>
<div className="all_photos">
    {this.state.response.map((dog)=>
    <BreedsItem dog={dog} key={dog.id}/>
    )}
</div>
</div>
</div>
        )
    }
}
export default Breeds