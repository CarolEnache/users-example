import axios from 'axios';

export const getUser = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    })
}

export const createUser = ({firstName, lastName}) => {
    return axios.post('/users', {
        firstName,
        lastName
    })
}

export const deleteUser = ({userId}) => {
    console.log(userId)
    return axios.delete(`/users/${userId}`);
}