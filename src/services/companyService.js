import axios from "axios";


export class CompanyService{
    getByCompanyList(){
        return axios.get("http://localhost:8080/employers/getByCompanyList")
    }
    postCompany(){
        return axios.post("http://localhost:8080/employers/addCompany")
    }
    deleteCompany(companyName){
        return axios.delete("http://localhost:8080/employers/delete?companyName="+companyName)
    }

}