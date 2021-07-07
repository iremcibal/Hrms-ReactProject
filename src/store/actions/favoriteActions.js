export const ADD_TO_FAVORİTE = "ADD_TO_FAVORİTE"
export const REMOVE_FROM_FAVORİTE = "REMOVE_FROM_FAVORİTE"

export function addToFavorite(jobPost){
    return{
        type: ADD_TO_FAVORİTE,
        payload: jobPost
    }
}

export function removeFromFavorite(jobPost){
    return{
        type: REMOVE_FROM_FAVORİTE,
        payload: jobPost
    }
}