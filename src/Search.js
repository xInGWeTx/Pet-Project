import React from "react"
import SearchItem from './SearchItem'
import './css/style_brand.css'
import './css/style_vot.css'
import arrow from './img/img_brand/Vector.png'
import Nav from './NavBar'
class Search extends React.Component{
    render(){
        return(
            <div className="right_dog">
        <Nav search={this.props.search} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
        <div className="main_right_dog">
            <div className="head_but">
                <a href="" className="arrow"><img className="arrow_brand_img"src={arrow}/></a>
                <a href="" className="vot">SEARCH</a>
                
            </div>
            <div className="all_photos">
        {this.props.response.map((dog)=>
    <SearchItem dog={dog} key={dog.id}/>
    )}
        </div>
            </div>
        </div>
        )
    }
}
export default Search