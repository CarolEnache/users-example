import axios from 'axios';

export const getUser = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    })
}