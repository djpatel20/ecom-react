import { v4 as uuidv4 } from "uuid";
export const saveinLocalstorage = (key,value) =>{
    const storage = JSON.parse(localStorage.getItem(key)) || []
    const duplicate = storage.some((current)=>
          current.myname === value.myname || current.email === value.email
            
    )

    const data = {
        ...value,
        id : uuidv4(),
        createdAt : new Date().toISOString()
    }
    if(!duplicate){
      
        storage.push(data)
        localStorage.setItem(key,JSON.stringify(storage))
        return true
    } 
    return false
}