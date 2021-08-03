import axios from "axios";


export class UniversityService{
    getUniversity(){
        return axios.get("http://localhost:8080/university/getByUniversityList")
    }
    getSortedUniversity(){
        return axios.get("http://localhost:8080/university/getAllsortedList")
    }
    postUniversity(neweducation){
        return axios.post("http://localhost:8080/university/save",neweducation)
    }
    deleteUniversity(universityId){
        return axios.delete("http://localhost:8080/university/delete",universityId)
    }
    updateUniversity(updateeducation){
        return axios.get("http://localhost:8080/university/updateUniversity",updateeducation)
    }
}