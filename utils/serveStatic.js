import path from 'node:http'

export async function serveStatic(req , res , baseDir){

  

    const filePath = path.join(baseDir , req.url === '/' ? 'index.html' : req.url) // here we are joining the base directory with the requested url. If the url is '/' then we will serve 'index.html' file. if not then we will serve the requested file.
    
    try{

    }catch(err){
        console.log(err)
    }
}