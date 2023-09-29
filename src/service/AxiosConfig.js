import axios, { Axios } from "axios";

const movieURL = import.meta.env.VITE_API;
const token = import.meta.env.VITE_TOKEN

const axiosInstance = axios.create({
    baseURL: movieURL

}
)

const getAuthHeaders = (token) => {
    if (token) {
        return { "Authorization": `Bearer ${token}` }
    }
    return {}
}

axiosInstance.interceptors.request.use(
    (config) => {
        const authHeaders = getAuthHeaders(token)
        config.headers = { ...config.headers, ...authHeaders }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

export default axiosInstance