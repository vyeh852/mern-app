import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_RESET } from '../constants';
// state為redux保存的整包狀態
export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false,
            };
        case GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
//  結構: store   products{
//        reducer products[]}
//        store   details{
//        reducer product{}}

export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                product: {},
            };
        case GET_PRODUCT_DETAILS_SUCCESS:
            return {
                product: action.payload,
                loading: false,
            };
        case GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case GET_PRODUCT_DETAILS_RESET:
            return {
                product: {},
            };
        default:
            return state;
    }
};