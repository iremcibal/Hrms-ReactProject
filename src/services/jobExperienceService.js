import axios from "axios";


export class JobExperienceService{
    getByExperiencesList(){
        return axios.get("http://localhost:8080/jobexperience/List")
    }
    getAllsortedList(){
        return axios.get("http://localhost:8080/jobexperience/getAllsortedList")
    }
    postJobExperience(){
        return axios.post("http://localhost:8080/jobexperience/save")
    }
    deleteJobExperience(experiencesId){
        return axios.delete("http://localhost:8080/jobexperience/delete?experiencesId="+experiencesId)
    }
    
}