import axios from "axios";


export default class JobPostService{
    getJobPostAll(){
        return axios.get("http://localhost:8080/jobpost/getall")
    }
    getJobPostActive(){
        return axios.get("http://localhost:8080/jobpost/getByJobPostList")
    }
    postJobPost(){
        return axios.post("http://localhost:8080/jobpost/getByJobPostSave")
    }
    getJobPostCompanyName(){
        return axios.get("http://localhost:8080/jobpost/getByCompanyNameList")
    }
    getJobPostSort(){
        return axios.get("http://localhost:8080/jobpost/getByJobPostSort")
    }
    getJobPostUpdateStatus(){
        return axios.get("http://localhost:8080/jobpost/updateStatusJobPost")
    }


}