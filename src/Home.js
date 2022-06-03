import React from "react"
import logo from'./img/img_main/Logo.png';
import table from'./img/img_main/vote-table.png'
import breeds from'./img/img_main/pet-breeds.png'
import search from'./img/img_main/images-search.png'
import './css/style.css'
import {Link} from "react-router-dom";
class Home extends React.Component{
    render(){
        return (
            <div className="left_home">
                <div className="left_fixed">
            <img src={logo} alt="" className="logo"/>
                <div className="home_title">
                <h1 className="centr_title">Hi intern!</h1>
                <p className="centr_text">Welcome to MSI 2021 Front-end test</p>
                </div>
            <div className="fot_home">
                <h2 className="fot_title">Lets start using The Dogs API</h2>
                    <div className="fot_but">
                <Link to="/voting"><div className="main_but_fot"><div className="img_div color1"><img src={table} alt="" className="main_but_img"/></div ><div className="main_but_fot_text">VOTING</div></div></Link>
                <Link to="/breed"><div className="main_but_fot"><div className="img_div color2"><img src={breeds} alt="" className="main_but_img"/></div ><div className="main_but_fot_text">BREEDS</div></div></Link>
                <Link to="/gallery"><div className="main_but_fot"><div className="img_div color3"><img src={search} alt="" className="main_but_img"/></div><div className="main_but_fot_text">GALLERY</div></div></Link>
            </div>
        </div>
    </div>
            </div>
        ) 
    }
}
export default Home