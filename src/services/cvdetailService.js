import axios from "axios";


export class CvDetailService{
    getDetail(){
        return axios.get("http://localhost:8080/cv/list")
    }
    postDetail(newnote){
        return axios.post("http://localhost:8080/cv/add",newnote)
    }

    getDetailCandidateId(candidatesId){
        return axios.get("http://localhost:8080/cv/candidatesIdList?candidatesId="+ candidatesId)
    }
}