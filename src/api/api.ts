import axios from "axios";
import {EditParamsType, ProfileType} from "../redux/profile-reducer";
import {Nullable} from "../redux/redux-store";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4df4176d-a901-401a-823f-86f4c8f72b8c',
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1, term: string = '', friend: Nullable<boolean> = null) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`)
            .then(response => response.data)
    },

    getProfile(userId: number) {
        console.warn('Please profileAPI object')
        return profileAPI.getProfile(userId)
    },

    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    unFollow(id: number | null | undefined) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id: number | null | undefined) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    isFollowed(id: number | null | undefined) {
        return instance.get(`follow/${id}`)
            .then(response => response.data)
    },

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
        return instance.put(`profile/status`, {status})
    },
    updateProfile(updateModelProfile: EditParamsType) {
        return instance.put('profile', updateModelProfile)
    },
    savePhoto(photoFile: string | Blob) {
        let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {headers: {"Content-Type": "multipart/form-data"}}
        )
    }
}

type LoginDataType = {
    email: string, password: string, rememberMe: boolean
}

export const authAPI = {
    login(data: LoginDataType) {
        return instance.post('/auth/login', data)
    },
    logout() {
        return instance.delete('/auth/login')
    }
}

export type CommonResponseType<T> = {
    data: T
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: 0 | 1
}

