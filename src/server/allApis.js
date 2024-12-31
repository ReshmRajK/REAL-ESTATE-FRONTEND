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