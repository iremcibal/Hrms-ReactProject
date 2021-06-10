import axios from "axios";


export class UniversityService{
    getUniversity(){
        return axios.get("http://localhost:8080/university/getByUniversityList")
    }
    getSortedUniversity(){
        return axios.get("http://localhost:8080/university/getAllsortedList")
    }
    postUniversity(){
        return axios.post("http://localhost:8080/university/save")
    }
    deleteUniversity(){
        return axios.delete("http://localhost:8080/university/delete")
    }
}