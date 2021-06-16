import axios from "axios";

export class JobTypeService{
    getJobTypeList(){
        return axios.get("http://localhost:8080/jobtype/typeList")
    }
}