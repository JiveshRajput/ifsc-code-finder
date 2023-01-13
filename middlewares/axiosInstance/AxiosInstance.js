import axios from "axios";

const axiosFetchBankDataInstance = axios.create({
    method: 'POST',
    baseURL: 'https://findbankifsccode.onrender.com'
})

export default axiosFetchBankDataInstance;