import fs from "fs";

//funcion para guardar gastos
export const get = (file)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(file+".json", "utf8", (err, content)=>{   
            if(err){
                reject(err);
            }
            resolve(JSON.parse(content)); 
        })
    })
}



//funcion para guardar los gatos
export const save = (file, content)=>{  
    return new Promise((resolve, reject)=>{
        fs.writeFile(file+".json",JSON.stringify(content), (err)=>{ 
            if (err){
                reject(err);
            }
            resolve()
        })
    })
}

