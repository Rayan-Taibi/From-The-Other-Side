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
        if(err.code === 'ENOENT'){
            const errFilePath = path.join(folderpath ,  '404.html' )
            const errExt = path.extname(errFilePath)
            const errContentType = getContentType(errExt)
            const errContent = await fs.readFile(errFilePath)
            sendResponse(res , 404 , errContentType , errContent)

        }else{
            sendResponse(res , 500 , 'text/html' , '<html><body><h1>Internal Server Error</h1></body></html>')
        }
       
    }
}