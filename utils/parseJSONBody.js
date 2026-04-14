export async function parseJSONBody(req) {
    let body =''
    
        for await(const chunk of req ){
            body += chunk
        }
        try{
            const jsonData = JSON.parse(body)
            return jsonData
        }catch(err){
            throw new Error(`Invalid json format: ${err}`)
        }
   
}