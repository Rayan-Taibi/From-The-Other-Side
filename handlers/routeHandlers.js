import { sendResponse } from "../utils/sendRespond.js"
import { getData } from "../utils/getData.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"
import { addNewSighting } from "../utils/addNewSighting.js"
import { sightingEvents } from "../events/sightingEvents.js"
export async function handleGet(req , res){
    const data = await getData()
    const stringifiedData  =JSON.stringify(data)
    const response = sendResponse(res , 200 , 'application/json' , stringifiedData)  // this is to convert the data to a string format that can be sent as a response
    return response
}

export async function handlePost(req , res) {
    
    try{
        const parsedBody = await parseJSONBody(req)
        await addNewSighting(parsedBody)

        sightingEvents.emit('sighting-added' , parsedBody)






        sendResponse(res , 201 , 'application/json' , JSON.stringify(parsedBody))
        
    }catch(err){
        sendResponse(res , 400 , 'application/json' , JSON.stringify({ error: err.message }))
  }
}