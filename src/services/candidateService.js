const { default: axios } = require("axios");


export class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8080/candidates/getByCandidateList")
    }
    postCandidates(){
        return axios.post("http://localhost:8080/candidates/addCandidate")
    }
    deleteCandidates(){
        return axios.delete("http://localhost:8080/candidates/delete")
    }
    getCandidates(){
        return axios.put("http://localhost:8080/candidates/cvList")
    }
}