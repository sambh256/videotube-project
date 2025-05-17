
import fs from "fs"


import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadONCloudinary= async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        const response= await cloudinary.uploader.upload
        (localFilePath,{
            resourse_type: "auto"
        })
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    }catch (error){
        fs.unlinkSync(localFilePath)
        return null;
    }
}



export {uploadONCloudinary}