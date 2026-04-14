import http from 'node:http'
import path from 'node:path'
import {serveStatic} from './utils/serveStatic.js'
import { handleGet } from './handlers/routeHandlers.js'
import { handlePost } from './handlers/routeHandlers.js'
const PORT = 8000
const __dirname = import.meta.dirname


const server = http.createServer(async (req,res) => {

    if(req.url === '/api'){
        if(req.method === 'GET'){
        
            const response = await handleGet(req , res)
            return response
        }
        if(req.method === 'POST'){     
             handlePost(req , res)
            
        }
    
    }else{
       return await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT , () => {
    console.log(`Connected on port : ${PORT}`)
})