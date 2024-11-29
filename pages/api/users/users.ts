import { createUser, getUsers } from "../../../src/controllers/userController";

export default async function handler(req, res){
    if(req.method === "GET") {
        return getUsers(req, res)
    }
    else if (req.method === "POST"){
        return createUser(req, res)
    }

}






