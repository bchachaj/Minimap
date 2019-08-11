import createContext from './createContext';
import mapAPI from '../api/map';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from './../Router';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'display_error': 
            return { ...state, errorMessage: action.payload }
        case 'user_signup': 
            return { ...state, jwt_token: action.payload, errorMessage: '' }
        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
        try {
            const res = await mapAPI.post('/signup', { email, password }); 
            await AsyncStorage.setItem('jwt_token', res.data.token)
            dispatch({ type: 'user_signup', payload: res.data.token })
            console.log(navigate)
            navigate('mapFlow');

        } catch (err) {
            dispatch({ type: 'display_error', payload: 'Signup failed'})
        }
    };


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
    { jwt_token: null, errorMessage: '' }
);