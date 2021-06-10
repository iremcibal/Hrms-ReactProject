import axios from "axios";


export class LanguageService{
    getLanguage(){
        return axios.get("http://localhost:8080/language/getByForeignLanguageList")
    }
    postLanguage(){
        return axios.post("http://localhost:8080/language/getByForeignLanguageSave")
    }
    deleteLanguage(){
        return axios.delete("http://localhost:8080/language/getByForeignLanguageDelete")
    }
    
}