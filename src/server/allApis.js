import { BASE_URL } from "./baseUrl"
import { commonStructure } from "./commonStructure"


export const userRegisterAPI=async(bodyData)=>{
    return await commonStructure("POST",`${BASE_URL}/signup`,bodyData)
}
export const userLoginAPI=async(bodyData)=>{
    return await commonStructure("POST",`${BASE_URL}/signin`,bodyData)
}
export const googleLoginAPI=async(bodyData)=>{
    return await commonStructure("POST",`${BASE_URL}/google-signin`,bodyData)
}
export const userDeleteAPI=async(id)=>{
    return await commonStructure("DELETE",`${BASE_URL}/user-delete/${id}`,"")
}
export const signOutAPI=async()=>{
    return await commonStructure("GET",`${BASE_URL}/user/signout`,"")
}