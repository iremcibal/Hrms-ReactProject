import axios from "axios";


export class CloudinaryService{
    getlist(){
        return axios.get("http://localhost:8080/cloudinary/list")
    }
    postupload(){
        return axios.post("http://localhost:8080/cloudinary/upload")
    }
    deleteImage(imageId){
        return axios.delete("http://localhost:8080/cloudinary/delete?imageId="+imageId)
    }
}
