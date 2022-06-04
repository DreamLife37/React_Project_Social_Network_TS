import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4df4176d-a901-401a-823f-86f4c8f72b8c'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data) //уменьшаем входные данные в компоненту
    },

    getProfile(userId: number) {
        console.warn('Please profileAPI object')
        return profileAPI.getProfile(userId)
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

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`,{status})
    }
}

