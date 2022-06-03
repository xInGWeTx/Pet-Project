import React from "react";
import center from'./img/img_modal/Vector.png'
import Dropzone  from "react-dropzone";
import './css/style_modal.css';
class DropzoneMain extends React.Component{
    
    render(){
        let placeholder=(<p className="text_center">Click Here</p>)
        let img=center
        if(this.props.formdata[0]){img=this.props.formdata[0].preview
        placeholder=""
    }
        console.log(img)
    return(
    <Dropzone onDrop={acceptedFiles => {
        let files = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          }))
        this.props.uploadHendler(files)}}>
    {({getRootProps,getInputProps})=>(
        <section>
            <div {...getRootProps()}>
                <img src={img} alt="" className="modal_centr_img"/>
                <input {...getInputProps()}/>
                {placeholder}
            </div>
        </section>
    )}
    </Dropzone>
    )
}
}
export default DropzoneMain
