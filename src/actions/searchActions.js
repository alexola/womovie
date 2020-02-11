import { SEARCH_MOVIE} from './types';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload:text
    })
}


// dispatch is coming from redux thunk 