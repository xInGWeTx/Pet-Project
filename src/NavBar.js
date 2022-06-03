import React from "react"
import './css/style_brand.css'
import './css/style_vot.css'
import search from './img/img_vot/Vector.png'
import smile from './img/img_vot/Vector (Stroke).png'
import like from './img/img_vot/Vector 348 (Stroke).png'
import dis from './img/img_vot/Vector (Stroke)smile.png'
import{Link} from "react-router-dom";


class Nav extends React.Component{
    render(){
        return(
            <div className="nav_right">
            <div className="search_main">
                <div>
            <input onChange={this.props.handleChange}  type="text" className="search_dog" placeholder="Search for breeds by name"/>
            <button onClick={this.props.handleSubmit} className="search_but"><img src={search}/></button>
            </div>
        </div>
            <Link to="/like"><div className="smile_nav"><img src={smile}/></div></Link>
            <Link to="/fav"><div className="smile_nav"><img src={like}/></div></Link>
            <Link to="/dis"><div className="smile_nav"><img src={dis}/></div></Link>
        </div>
        )
    }
}
export default Nav