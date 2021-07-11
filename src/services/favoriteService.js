import axios from "axios";


export class FavoriteService{
    addFavorite(){
        return axios.post("http://localhost:8080/favorite/addFavorite")
    }
    deleteFavorite(favoriteId){
        return axios.delete("http://localhost:8080/favorite/deleteFavorite{favoriteId}?favoriteId="+favoriteId)
    }

    getFavorite(id){
        return axios.get("http://localhost:8080/favorite/getByCandidateIdFavList?id="+id)
    }
}