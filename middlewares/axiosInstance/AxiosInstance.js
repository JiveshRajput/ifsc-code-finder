import axios from "axios";

const axiosFetchBankDataInstance = axios.create({
    method: 'POST',
    baseURL: process.env.API_REQUEST_URL
})

export default axiosFetchBankDataInstance;