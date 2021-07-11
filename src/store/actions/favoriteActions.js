
export const ADD_TO_FAVORITE = "ADD_TO_FAVORİTE"
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORİTE"

export function addToFavorite(jobPost){
    return{
        type: ADD_TO_FAVORITE,

        payload: jobPost
    }
}

export function removeFromFavorite(jobPost){
    return{
        type: REMOVE_FROM_FAVORITE,
        payload: jobPost
    }
}