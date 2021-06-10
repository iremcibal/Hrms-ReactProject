import axios from "axios";


export class JobExperienceService{
    getJobExperience(){
        return axios.get("http://localhost:8080/jobexperience/List")
    }
    getSortedJobExperience(){
        return axios.get("http://localhost:8080/jobexperience/getAllsortedList")
    }
    postJobExperience(){
        return axios.post("http://localhost:8080/jobexperience/save")
    }
    deleteJobExperience(){
        return axios.delete("http://localhost:8080/jobexperience/delete")
    }
    
}