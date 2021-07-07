import { ADD_TO_FAVORİTE, REMOVE_FROM_FAVORİTE } from '../actions/favoriteActions'
import { favoriteItems } from '../initialValues/favoriteItems'

const initialState = { favoriteItems: favoriteItems };

export default function favoriteReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_FAVORİTE:
            let jobPost = state.favoriteItems.find(c => c.jobPost.id === payload.id)
            if(jobPost) {
                return {
                    ...state,
                    favoriteItems: state.favoriteItems.filter(c => c.jobPost.id !== payload.id)
                }
            }else {
                return {
                    ...state,
                    favoriteItems: [...state.favoriteItems, {quantity:1,jobPost: payload}]
                }
            }
        case REMOVE_FROM_FAVORİTE:
            return {
                ...state,
                favoriteItems: state.favoriteItems.filter(c => c.jobPost.id !== payload.id)
            }
        default:
            return state;
    }
}
