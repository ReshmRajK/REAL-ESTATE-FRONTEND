import axios from "axios"


export const commonStructure=(method,url,reqBody,reqHeader)=>{
    const config={
        method,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return axios(config).then(data=>{
        return data
    }).catch(data=>{
        return data
    })


}