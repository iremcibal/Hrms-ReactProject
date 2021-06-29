import axios from "axios"


export class NewPostService{

    getByCompanyList(){
        return axios.get("http://localhost:8080/employers/getByCompanyList")
    }

    getCityList(){
        return axios.get("http://localhost:8080/city/cityList")
    }

    getJobTypeList(){
        return axios.get("http://localhost:8080/jobtype/typeList")
    }

    getJobTimeList(){
        return axios.get("http://localhost:8080/jobtime/timeList")
    }






}