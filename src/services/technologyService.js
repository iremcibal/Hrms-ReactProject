import axios from "axios";


export class TechnologyService{
    getTechnology(){
        return axios.get("http://localhost:8080/technology/getByTechnologyList")
    }
    postTechnology(newtechnology){
        return axios.post("http://localhost:8080/technology/getByTechnologySave",newtechnology)
    }
    deleteTechnology(){
        return axios.delete("http://localhost:8080/technology/getByTechnologyDelete")
    }
    
}