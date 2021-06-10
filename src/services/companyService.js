import axios from "axios";


export class CompanyService{
    getCompany(){
        return axios.get("http://localhost:8080/employers/getByCompanyList")
    }
    postCompany(){
        return axios.post("http://localhost:8080/employers/addCompany")
    }
    deleteCompany(){
        return axios.delete("http://localhost:8080/employers/delete")
    }

}