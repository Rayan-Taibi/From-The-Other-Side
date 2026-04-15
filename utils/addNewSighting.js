import fs from 'node:fs/promises'
import path from 'node:path'
import { getData} from "./getData.js"
import { sanitizeInput } from "./sanitize.js"
export async function addNewSighting(newSighting){

     const sanitizedSighting = {
        location : sanitizeInput(newSighting.location),
        timeStamp : sanitizeInput(newSighting.timeStamp),
        text : sanitizeInput(newSighting.text),
        title : sanitizeInput(newSighting.title)
     }
    const filePath = path.join('data', 'data.json')
    try{
        const data = await getData()
        data.push(sanitizedSighting)
        await fs.writeFile(filePath, JSON.stringify(data , null, 2), 'utf8') // null, 2 for pretty printing
    }catch(err){
        console.error('Error adding new sighting:', err)
    }

}