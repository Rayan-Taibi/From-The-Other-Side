import path from 'node:path'
import fs from 'node:fs/promises'
import {sendResponse} from './sendRespond.js'
import {getContentType} from './getContentType.js'


export async function serveStatic(req , res , baseDir){

    const folderpath = baseDir
    const filePath = path.join(folderpath , req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    const contentType = getContentType(ext)
    try{
        const content = await fs.readFile(filePath)
        
        sendResponse(res , 200 , contentType , content)

    }catch(err){
        console.log(err)
    }
}