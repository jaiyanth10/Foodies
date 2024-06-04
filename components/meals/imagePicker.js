'use client';
import Image from "next/image";
import  classes  from "./image-picker.module.css";
import { useRef, useState } from "react";
export default function ImagePicker({ label, name }) {
    const[imageurl,setImageurl]=useState();
    const imageRef = useRef();
    function pickImage(){
      imageRef.current.click();
    }
    function inputChange(event){
        const file = event.target.files[0];
        if(!file){
            setImageurl(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);//this will change the file into data url
        fileReader.onload = ()=>{//this will run when above function is done changing to URL
            setImageurl(fileReader.result)//.result will contain result
        }
    }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imageurl && <p>No image picked yet.</p>}  
          {imageurl &&<Image src={imageurl} alt="Selected Image" fill/>}
        </div>
        <input 
        className={classes.input}
        ref={imageRef}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={inputChange}
          required
        />
        <button type="button" className={classes.button} onClick={pickImage}  >
        Pick an Image
      </button>
      </div>
    </div>
  );
}
