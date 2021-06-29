import axios from "axios";


export class JobPostService{
    getJobPostAll(){
        return axios.get("http://localhost:8080/jobpost/getall")
    }
    getJobPostActive(){
        return axios.get("http://localhost:8080/jobpost/getByJobPostList")
    }
    postJobPost(newJobPost){
        return axios.post("http://localhost:8080/jobpost/getByJobPostSave",newJobPost)
    }
    getJobPostCompanyName(companyName){
        return axios.get("http://localhost:8080/jobpost/getByCompanyNameList?companyName="+ companyName)
    }
    getJobPostSort(){
        return axios.get("http://localhost:8080/jobpost/getByJobPostSort")
    }
    getJobPostUpdateStatus(){
        return axios.get("http://localhost:8080/jobpost/updateStatusJobPost")
    }


}