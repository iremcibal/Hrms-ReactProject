import axios from "axios";

export class JobTimeService{
    getJobTimeList(){
        return axios.get("http://localhost:8080/jobtime/timeList")
    }
}