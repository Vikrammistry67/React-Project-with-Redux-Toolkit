import axios from '../../config/axiosConfig';
import { loadUser } from '../auth/UserSlice';

export const createUser = (user) => async (dispatch, getState) => {
    try {
        // console.log('getState --> ', getState());
        const response = await axios.post('/users', user);
        dispatch(loadUser(response.data));
    } catch (e) {
        console.log(e)
    };
}


// export const getUser = () => async (dispatch, getState) => {
//     try {
//         const response = await axios.get('/users');
//         dispatch(loadUser(response.data));
//     } catch (e) {
//         console.log(e)
//     };
// }