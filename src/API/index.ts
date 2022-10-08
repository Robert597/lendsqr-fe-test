import Axios from "axios";

const Api = Axios.create({ baseURL: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/"});

export const fetchUsers = () => Api.get('users');
export const fetchUserDetail = (id:string) => Api.get(`users/${id}`);