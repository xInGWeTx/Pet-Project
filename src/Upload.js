import React from "react"
import './css/style_modal.css'
import close from'./img/img_modal/Vector (Stroke).png'
import DropzoneMain from './dropzone'
import{Link} from "react-router-dom";
class Upload extends React.Component{
    constructor(props){
        super(props)
        this.state={
            formdata:{},
        }
    this.uploadHendler=this.uploadHendler.bind(this)
    this.upload=this.upload.bind(this)
    }
    upload(){
        let url=`https://api.thedogapi.com/v1/images/upload`
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"multipart/form-data",
                "Access-Control-Allow-Origin":"*",
                "Access-Conrol-Allow-Headers":"Origin, X-Requested-With,Content-Type,Accept",
                "x-api-key":"02d4aaa8-cc49-4be1-8531-143718f2c253"
            }
        })

    }
    uploadHendler(formdata){
        
        this.setState({formdata:formdata},console.log(this.state.formdata))

    }
    render(){
        return(
            <>
            <div className="modal_overlay"></div>
            <div className="right_modal">
            <Link to="/"><button className="closed_modal"><img className="closed_modal_img" src={close}/></button></Link>
            <div className="head_modal">
                <h2 className="modal_title">Upload a .jpg or .png Dog Image</h2>
                <p className="modal_text">Any uploads must comply with the <a className="link_text_head">upload guidelines</a> or face deletion.</p>
            </div>
            <div className="centr_modal">
                <div className="centr_img_modal">
                    <DropzoneMain uploadHendler={this.uploadHendler} formdata={this.state.formdata}/>
                </div>
            </div>  
        </div>
        </>
        )
    }
}
export default Upload
