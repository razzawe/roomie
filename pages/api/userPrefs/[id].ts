import { getUserPreference } from "@/src/controllers/userController";

export default async function handler(req, res){
    
    if(req.method === "GET"){
        return getUserPreference(req, res)
    }
}