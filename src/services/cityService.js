import axios from "axios";

export class CityService{
    getCityList(){
        return axios.get("http://localhost:8080/city/cityList")
    }

    postCityList(){
        return axios.post("http://localhost:8080/city/cityPost")
    }
        
}