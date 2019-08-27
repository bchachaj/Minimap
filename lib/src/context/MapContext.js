import createContext from './createContext';
import mapAPI from '../api/map';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from './../Router';
import RNFetchBlob from 'rn-fetch-blob';
import { isFlowPredicate } from '@babel/types';

const mapReducer = (state, action) => {
    switch (action.type) {
        case 'get_maps':
            return { ...state, maps: action.payload } 
        case 'add_map': 
            return state; 
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

const createMap = (dispatch) => async () => {
    console.log('create map')
}


const uploadImageForMap = (dispatch) => async ({ fileName, image_params }) => {
    const token = await AsyncStorage.getItem('jwt_token');
    const config = {
        headers: { 'Authorization': "Bearer " + token }
    };

    const { data: presignedUrl } = await mapAPI.post('/upload', { fileName }, config);
    const formatURI = image_params.uri.replace('file://', ''); 

    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Successfully uploaded the file.
                console.log('sucessfully uploaded')
            } else {
                // The file could not be uploaded.
                console.log('upload failed')

            }
        }
    }


    xhr.open('PUT', presignedUrl)
    xhr.setRequestHeader('X-Amz-ACL', 'public-read')
    xhr.setRequestHeader('Content-Type', image_params.type)
    xhr.send({ uri: formatURI, type: image_params.type, name: image_params.fileName })
}



export const { Provider, Context } = createContext(
    mapReducer,
    { getMaps, uploadImageForMap },
    { maps: [], focusedMap: [] }
);