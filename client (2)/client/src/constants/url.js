const API_URL = 'http://localhost:3003/';

export const TOKEN_KEY = "token";
// user
export const SIGNUP_ROUTE = API_URL + "users/signUp";
export const LOGIN_ROUTE = API_URL + "users/login";
export const USER_INFO_ROUTE = API_URL + "users/getUserInfo";
export const CHECK_TOKEN = API_URL + "users/checkToken";
export const PRODUCT_LIST_ROUTE = API_URL + "products/productsList";
export const MAILER_URL = "https://new-mailer.onrender.com/api/product/getbill";
// admin
export const USERS_LIST_ROUTE = API_URL + "users/usersList";
export const DELETE_USER_ROUTE = API_URL + "users/delete/"
export const CHECK_ADMIN_TOKEN = API_URL + "users/checkAdminToken";
export const ADD_PRODUCT_ROUTE = API_URL + "products/addProduct";
export const DELETE_PRODUCT_ROUTE =API_URL + "products/deleteProduct/"
export const EDIT_PRODUCT_ROUTE = API_URL + "products/editProduct/";
export const SET_PRODUCT_INSTOCK_ROUTE = API_URL + "products/setInStock/"
