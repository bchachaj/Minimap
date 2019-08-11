import createContext from './createContext';
import mapAPI from '../api/map';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from './../Router';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'display_error': 
            return { ...state, errorMessage: action.payload }
        case 'user_login':
            return { ...state, jwt_token: action.payload, errorMessage: '' }
        case 'clear_errors': 
            return { ...state, errorMessage: '' }
        case 'logout': 
            return { jw_token: null, errorMessage: ''}
        default:
            return state;
    }
};

const clear_errors = (dispatch) => () => {
    dispatch({ type: 'clear_errors' })
};

const signup = (dispatch) => async ({ email, password }) => {
        try {
            const res = await mapAPI.post('/signup', { email, password }); 
            await AsyncStorage.setItem('jwt_token', res.data.token)
            dispatch({ type: 'user_login', payload: res.data.token })
            navigate('mapFlow');

        } catch (err) {
            dispatch({ type: 'display_error', payload: 'Signup with provided inputs failed!'})
        }
    };


const login = (dispatch) => async ({ email, password }) => {

    try { 
        const res = await mapAPI.post('/login', { email, password });
        await AsyncStorage.setItem('jwt_token', res.data.token)
        dispatch({ type: 'user_login', payload: res.data.token })
        navigate('mapFlow');
    } catch (err) {
        const login_err_msg = "Login Failed - Are your credentials correct?"; 
        dispatch({ type: 'display_error', payload: login_err_msg })
    }
}

const logout = (dispatch) => async () => {
    await AsyncStorage.removeItem('jwt_token'); 
    dispatch({ type: 'user_logout' })
    navigate('authFlow');
}

const checkLocalCredentials = dispatch => async () => {
    const token = await AsyncStorage.getItem('jwt_token');
    if(token) {
        dispatch({ type: 'user_login', payload: token });
        navigate('MapList');
    } else {
        navigate('authFlow');
    }
}

export const { Provider, Context } = createContext(
    authReducer, 
    { signup, login, logout, clear_errors, checkLocalCredentials }, 
    { jwt_token: null, errorMessage: '' }
);