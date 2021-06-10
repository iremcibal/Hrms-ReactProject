import axios from "axios";


export class TechnologyService{
    getTechnology(){
        return axios.get("http://localhost:8080/technology/getByTechnologyList")
    }
    postTechnology(){
        return axios.post("http://localhost:8080/technology/getByTechnologySave")
    }
    deleteTechnology(){
        return axios.delete("http://localhost:8080/technology/getByTechnologyDelete")
    }
    
}