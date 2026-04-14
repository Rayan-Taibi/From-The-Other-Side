import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData(){
    // relative path to the data.json file
    const dataPath = path.join('data' , 'data.json')


    try{
        const data = await fs.readFile(dataPath , 'utf-8')
        const jsonData = JSON.parse(data)
        return jsonData

    }catch(err){
     return []
    }

    
    
}