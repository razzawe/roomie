import { createUserPreference } from "@/src/controllers/userController";

export default async function handler(req, res){
    if(req.method === "POST") {
        return createUserPreference(req, res)
    }
}