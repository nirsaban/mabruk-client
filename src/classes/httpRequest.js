import Axios from "../helpers/axios"



class httpRequest{

    constructor(path){
        this.path = path
    }
    async post(data){
       return await Axios.post(this.path,{...data})
    }
    async get(params){
       return await Axios.get(this.path,{...params})
    }
}

export default httpRequest