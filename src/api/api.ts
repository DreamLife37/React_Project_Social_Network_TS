import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '27053e26-be4d-42b2-bed5-12f19854fff6'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data) //уменьшаем входные данные в компоненту
    },

    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data) //уменьшаем входные данные в компоненту
    },

    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

// export const getUsers = (currentPage: number = 1, pageSize: number = 1) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data) //уменьшаем входные данные в компоненту
// }
