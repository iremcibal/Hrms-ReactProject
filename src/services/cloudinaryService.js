import axios from "axios";


export class CloudinaryService{
    getImage(){
        return axios.get("http://localhost:8080/cloudinary/list")
    }
    postImage(){
        return axios.post("http://localhost:8080/cloudinary/upload")
    }
    deleteImage(){
        return axios.delete("http://localhost:8080/cloudinary/delete")
    }
}
