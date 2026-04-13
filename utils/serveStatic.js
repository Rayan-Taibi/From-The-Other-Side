import path from 'node:http'
import fs from 'node:fs/promises'
import {sendResponse} from './sendRespond.js'

export async function serveStatic(req , res , baseDir){

  

    const filePath = path.join(baseDir ,'public' , 'index.html' ) // here we are joining the base directory with the requested url. If the url is '/' then we will serve 'index.html' file. if not then we will serve the requested file.
    
    try{
        const content = await fs.readFile(filePath)
        sendResponse(res , 200 , 'text/html ' , content)

    }catch(err){
        console.log(err)
    }
}