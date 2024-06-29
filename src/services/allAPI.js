import commonAPI from "./commonAPI.JS";
import SERVERURL from "./serverurl";
  
export const registerAPI = async (reqBody)=>{
   
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody)=>{
    // console.log(reqBody);
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody) 

}

export const addProjectAPI = async (reqBody,reqHeader)=>{
    // project/add
    return await commonAPI("POST",`${SERVERURL}/project/add`,reqBody,reqHeader)
}

