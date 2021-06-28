import axios from "axios";


export class AuthService{
    addRegisterCandidate(newcandidate){
        return axios.post("http://localhost:8080/AuthController/candidateForRegisterDto",newcandidate)
    }
    addRegisterCompany(newcompany){
        return axios.post("http://localhost:8080/AuthController/companyForRegisterDto",newcompany)
    }



}