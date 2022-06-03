import React from "react"
import './css/style_vot.css'
import search from './img/img_vot/Vector.png'
import smile from './img/img_vot/Vector (Stroke).png'
import like from './img/img_vot/Vector 348 (Stroke).png'
import dis from './img/img_vot/Vector (Stroke)smile.png'
import arrow from './img/img_brand/Vector.png'
import centrSmile from './img/img_vot/Vec.png'
import centrDis from './img/img_vot/Vec3.png'
import footerSmile from './img/img_vot/Vector1.png'
import footerLike from './img/img_vot/Vector2.png'
import footerDis from './img/img_vot/Vector3.png'
import Nav from './NavBar'
import{Link} from "react-router-dom";
class Voting extends React.Component{
    constructor(props){
        super(props)
        this.state={
            img:{},
            votes:[],
            favourites:[],
            favourite_id:"",
        }
        this.getImg=this.getImg.bind(this)
        this.createVote=this.createVote.bind(this)
        this.getVotes=this.getVotes.bind(this)
        this.addToFavourite=this.addToFavourite.bind(this)
        this.deleteFavourite=this.deleteFavourite.bind(this)
    }
    componentDidMount(){
        this.getImg()
        this.getVotes()
        this.getFavourites()
    }
    createVote(value){
        let url=`https://api.thedogapi.com/v1/votes`
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*",
                "Access-Conrol-Allow-Headers":"Origin, X-Requested-With,Content-Type,Accept",
                "x-api-key":"02d4aaa8-cc49-4be1-8531-143718f2c253"
            },
            body:JSON.stringify({
                image_id:this.state.img.id,
                value:value
            })
        })
    }
    getFavourites(){
        let url=`https://api.thedogapi.com/v1/favourites`
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
            this.setState({favourites:response})
        })
    }
    
    addToFavourite(){
        let url=`https://api.thedogapi.com/v1/favourites`
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*",
                "Access-Conrol-Allow-Headers":"Origin, X-Requested-With,Content-Type,Accept",
                "x-api-key":"02d4aaa8-cc49-4be1-8531-143718f2c253"
            },
            body:JSON.stringify({
                image_id:this.state.img.id,
            })
        })
        .then(response=>response.json())
        .then(response=>{
            this.setState({favourite_id:response.id})
        })
    }
    deleteFavourite(){
        let url=`https://api.thedogapi.com/v1/favourites/${this.state.favourite_id}`
        fetch(url,{
            method:"DELETE",
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Access-Conrol-Allow-Headers":"Origin, X-Requested-With,Content-Type,Accept",
                "x-api-key":"02d4aaa8-cc49-4be1-8531-143718f2c253"
            }
        })
        .then(response=>response.json())
        .then(response=>{
            this.setState({favourite_id:""})
        })
    }
    getVotes(){
        let url=`https://api.thedogapi.com/v1/votes`
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
            this.setState({votes:response})
        })
    }
    getImg(){
        let url=`https://api.TheDogAPI.com/v1/images/search`
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
            this.setState({img:response[0]})
        })
    }
    toogleFavourite(){
        if(this.state.favourite_id){
            this.deleteFavourite()
        }
        else{this.addToFavourite()}
        this.getFavourites()
    }
    render(){
        let vote_list=this.state.votes
        let favourites_list=this.state.favourites
        let not_list= vote_list.concat(favourites_list);
        not_list.sort((a,b)=> new Date(b.created_at)- new Date(a.created_at))
        let active=this.state.favourite_id?`active`:""
        return(
            <div className="right_dog">
            <Nav search={this.props.search} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
        <div className="main_right_dog">
            <div className="head_but">
            <Link to="/"><div className="arrow"><img className="arrow_brand_img"src={arrow}/></div></Link>
                <a href="" className="vot">VOTING</a>
                
            </div>
            <div className="main_img_centr">
                <img src={this.state.img.url} alt="" className="dog_centr"/>
                <div className="image_nav">
                    <button onClick={()=>{this.createVote(1)
                    this.getImg()
                    this.getVotes()
                    }} className="vote_like"><img src={centrSmile} className="vote_color"/></button>
                    <button onClick={()=>{this.toogleFavourite()
                    
                    }} className={`vote_fav ${active}`}><svg width="32" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.07107 0C3.61354 0 0 3.61354 0 8.07107C0 10.2116 0.850339 12.2646 2.36396 13.7782L14.2929 25.7071C14.6834 26.0976 15.3166 26.0976 15.7071 25.7071L27.636 13.7782C29.1497 12.2646 30 10.2116 30 8.07107C30 3.61354 26.3865 0 21.9289 0C19.7884 0 17.7354 0.850341 16.2218 2.36396L15 3.58579L13.7782 2.36396C12.2646 0.850343 10.2116 0 8.07107 0Z" stroke="white"/>
</svg>
</button>
                    <button onClick={()=>{this.createVote(0)
                    this.getImg()
                    this.getVotes()
                }} 
                                className="vote_dis"><img src={centrDis} className="vote_color"/></button>
                </div>
            </div>
            <div className="fot_form_main">
                {not_list.slice(0,4).map((vote)=>{
                    let date=new Date(vote.created_at)
                    let h=date.getHours()
                    let m=date.getMinutes()
                if(vote.value ==1){
                    return(
                        <div className="form_footer" key={vote.id}>
                        <div className="fot_date">{zero(h)}:{zero(m)}</div>
                        <div className="fot_text">Image ID: {vote.image_id} was added to Like</div>
                        <div className="fot_img"><img src={footerLike}/></div>
                        </div>
                    )}
                    else if(vote.value==0){
                    return(
                        <div className="form_footer" key={vote.id}>
                        <div className="fot_date">{zero(h)}:{zero(m)}</div>
                        <div className="fot_text">Image ID: {vote.image_id} was added to Dislike</div>
                        <div className="fot_img"><img src={footerDis}/></div>
                        </div>
                    )
                } 
                else{
                    return(
                        <div className="form_footer" key={vote.id}>
                        <div className="fot_date">{zero(h)}:{zero(m)}</div>
                        <div className="fot_text">Image ID: {vote.image_id} was added to favourites</div>
                        <div className="fot_img"><img src={footerSmile}/></div>
                        </div>
                    )
                }
                }
                    
    )}
            </div>
        </div>
    </div>
        )
    }
};
function zero(number)
    {
        if(number <10){
        return "0"+number
        
        }
        else{
            return number
            
        } 
}
export default Voting