import axios from "../../config/axiosConfig"
import { loadCart } from "../cart/CartSlice";

export const getCart = () => async (dispatch, getState) => {
    try {
        const response = await axios.get('/carts');
        dispatch(loadCart(response.data));
    } catch (error) {
        console.log(error)
    }
}