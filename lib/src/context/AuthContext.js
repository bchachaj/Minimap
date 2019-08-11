import createContext from './createContext';
import mapAPI from '../api/map';
import xios from 'axios';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'display_error': 
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const res = await mapAPI.post('/signup', { email, password }); 
            console.log(res.data)
        } catch (err) {
            dispatch({ type: 'display_error', payload: 'Signup failed'})
        }
    };
}

const login = (dispatch) => {
    return ({ email, password }) => {
        
    }
}

const logout = (dispatch) => {
    return () => {

    }
}

export const { Provider, Context } = createContext(
    authReducer, 
    { signup, login, logout }, 
    { isAuth: false }
);