import { FETCH_USER } from './types';

const fetchUser = () => {
    return function(dispatch) {
        dispatch({ type: FETCH_USER, payload: "result"});
    }
}