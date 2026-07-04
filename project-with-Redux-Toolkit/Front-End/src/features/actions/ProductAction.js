import axios from '../../config/axiosConfig';
import { loadProduct } from '../product/ProductSlice';

export const getProduct = () => async (dispatch, getState) => {
    try {
        const response = await axios.get('/products');
        dispatch(loadProduct(response.data))
    } catch (error) {
        console.log(error)
    }
}