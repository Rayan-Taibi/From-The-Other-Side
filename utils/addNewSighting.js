import fs from 'node:fs/promises'
import path from 'node:path'
import { getData} from "./getData.js"


export async function addNewSighting(newSighting){

    const directoryPath = import.meta.dirname
    const filePath = path.join(directoryPath , 'data' , 'data.json')
    try{
        const data = await getData()
        data.push(newSighting)
        await fs.writeFile(filePath, JSON.stringify(data), 'utf8')
    }catch(err){
        console.error('Error adding new sighting:', err)
    }

}