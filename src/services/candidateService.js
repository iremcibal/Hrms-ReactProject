import axios from "axios";


export class CandidateService{
    getByCandidateList(){
        return axios.get("http://localhost:8080/candidates/getByCandidateList")
    }
    postCandidates(){
        return axios.post("http://localhost:8080/candidates/addCandidate")
    }
    deleteCandidates(nationaltyNo){
        return axios.delete("http://localhost:8080/candidates/delete?nationaltyNo="+nationaltyNo)
    }
    getCurriculumVitaeById(id){
        return axios.get("http://localhost:8080/candidates/cvList?id="+id)
    }
}