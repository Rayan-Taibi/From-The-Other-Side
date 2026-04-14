import { sendResponse } from "../utils/sendRespond.js"
import { getData } from "../utils/getData.js"
export async function handleGet(req , res){
    const data = await getData()
    const stringifiedData  =JSON.stringify(data)
    const response = sendResponse(res , 200 , 'text/html' , stringifiedData)  // this is to convert the data to a string format that can be sent as a response
    return response
}

export async function handlePost(req , res) {
    console.log('POST request received')
}