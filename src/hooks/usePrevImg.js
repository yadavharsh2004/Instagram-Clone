import React, { useState } from 'react'
import useShowToast from './useShowToast';

const usePrevImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSizeInBytes = 2 * 1024 * 1024;  //2 MB

  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    
    if(file && file.type.startsWith("image/")){
        if(file.size > maxFileSizeInBytes){
            showToast("Error", "File size must be less than 2MB", "error")
            console.log(object);
            return ;
        }

        const reader = new FileReader();
        
        reader.onloadend = () =>{
            console.log("File loaded successfully:", reader.result);
            setSelectedFile(reader.result);
        }
        
        reader.readAsDataURL(file);
    }
    else{
        showToast("Error", "Please select an Image file", "error");
        setSelectedFile(undefined)
    }
  }

  return {selectedFile, handleImageChange, setSelectedFile}


}

export default usePrevImg