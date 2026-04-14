import fs from 'node:fs/promises'
import path from 'node:path'
import { getData} from "./getData.js"
export async function addNewSighting(newSighting){

     
    const filePath = path.join('data', 'data.json')
    try{
        const data = await getData()
        data.push(newSighting)
        await fs.writeFile(filePath, JSON.stringify(data , null, 2), 'utf8') // null, 2 for pretty printing
    }catch(err){
        console.error('Error adding new sighting:', err)
    }

}