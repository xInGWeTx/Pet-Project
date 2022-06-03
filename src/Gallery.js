import React from "react"
import GalleryItem from './GalleryItem'
import './css/style_vot.css'
import './css/style_brand.css'
import './css/style_gallery.css'
import search from './img/img_vot/Vector.png'
import smile from './img/img_vot/Vector (Stroke).png'
import like from './img/img_vot/Vector 348 (Stroke).png'
import dis from './img/img_vot/Vector (Stroke)smile.png'
import arrow from './img/img_brand/Vector.png'
import upload from './img/img_gallary/Vector (Stroke).png'
import refresh from './img/img_gallary/refresh.png'
import Nav from './NavBar'
import{Link} from "react-router-dom";
class Gallery extends React.Component{
        constructor(props){
            super(props)
            this.state={
                response:[],
                breeds:[],
                limit:5,
                type:"jpg,png",
                order:"Random",
                breedId:"",
            }
        this.getData=this.getData.bind(this)
        this.changeCount=this.changeCount.bind(this)
        this.changeBreed=this.changeBreed.bind(this)
        this.changeOrder=this.changeOrder.bind(this)
        this.changeType=this.changeType.bind(this)
        this.refresh=this.refresh.bind(this)
        this.getBreeds=this.getBreeds.bind(this)
        }
        componentDidMount(){
            this.getData()
            this.getBreeds()
        }
            getData(){
                let url=`https://api.TheDogAPI.com/v1/images/search?breed_ids=${this.state.breedId}&limit=${this.state.limit}&order=${this.state.order}&mime_types=${this.state.type}`
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
            refresh(){
                this.getData()
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
            changeOrder(e){
                this.setState({order:e.target.value}
                    )
            }
            changeCount(e){
                this.setState({limit:e.target.value}
                    )
        
            }
            changeBreed(e){
                this.setState({breedId:e.target.value}
                    )
            }
            changeType(e){
                this.setState({type:e.target.value}
                    )
            }
render(){
    return(
        <div className="right_gallery">
        <Nav search={this.props.search} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
    <div className="main_gallery">
        <div className="head_gallery">
        <Link to="/"><div className="arrow_brand"><img className="arrow_brand_img"src={arrow}/></div></Link>
        <a href="" className="brand_but">GALLERY</a>
        <Link to="/upload"><button className="head_but_upl"><img className="head_but_img" src={upload}/>UPLOAD</button></Link>
    </div>
    
    <div className="centr_gallery">
        <div className="main_rand">
        <label htmlFor="all_rand" className="all_lab">ORDER</label>
        <select onChange={this.changeOrder} name="" id="all_rand" className="all_rand_cla">
            <option value="RANDOM">Random</option>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
            </select>
        </div>
        <div className="main_stat">
    <label htmlFor="all_stat" className="all_lab">TYPE</label>
    <select onChange={this.changeType} name="" id="all_stat" className="all_stat_cla">
        <option value="">All</option>
        <option value="png,jpg">Static</option>
        <option value="gif">Animated</option>
    </select>
</div>
    <div className="main_non">
    <label htmlFor="all_non" className="all_lab">BREED</label>
    <select onChange={this.changeBreed} name="" id="all_non" className="all_non_cla">
        <option value="">All</option>
    {this.state.breeds.map(breed=>
            <option value={breed.id} key={breed.id}>{breed.name}</option>
            )}
    </select>
</div>
    <div className="main_item">
    <label htmlFor="all_items" className="all_lab">LIMIT</label>
    <select onChange={this.changeCount} name="" id="all_items" className="all_items_cla">
        <option value="5">5 items per page</option>
        <option value="10">10 iems per page</option>
        <option value="15">15 iems per page</option>
        <option value="20">20 iems per page</option>
    </select>
</div>
        <button onClick={this.refresh} className="refresh"><img src={refresh}/></button>
        </div>
        <div className="all_photos">
        {this.state.response.map((dog)=>
    <GalleryItem dog={dog} key={dog.id}/>
    )}
        </div>
    </div>
</div>
    )
}}
export default Gallery