import createContext from './createContext';
import mapAPI from '../api/map';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from './../Router';

const mapReducer = (state, action) => {
    switch (action.type) {
        case 'get_maps':
            return { ...state, maps: action.payload } 
        default:
            return state;
    }
};


const getMaps = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('jwt_token');
    console.log(token)
    const config = {
        headers: { 'Authorization': "Bearer " + token }
    };
    try {
        const res = await mapAPI.get('/maps', config);
        console.log(res)
        dispatch({ type: 'get_maps', payload: res.data });
        
    } catch (err) {
        console.log(err);
    }
};

// const createMap = (dispatch) => async () => {
//     console.log('create map')
// }


export const { Provider, Context } = createContext(
    mapReducer,
    { getMaps },
    { maps: [] }
);