import createContext from './createContext';
import mapAPI from '../api/map';
import axios from 'axios';

const authReducer = (state, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

const signup = (dispatch) => {
    console.log('hit signup')
    return async ({ email, password }) => {

        console.log(email, password, mapAPI)
        try {
            const res = await mapAPI.post('/signup', { email, password }); 
            console.log(res.data)
        } catch (err) {
            console.log(err)
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