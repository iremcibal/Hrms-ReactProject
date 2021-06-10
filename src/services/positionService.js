import axios from "axios";


export class PositionService{
    getPosition(){
        return axios.get("http://localhost:8080/positions/getAll")
    }
    postPosition(){
        return axios.post("http://localhost:8080/positions/add")
    }
    deletePosition(){
        return axios.delete("http://localhost:8080/positions/delete")
    }
}