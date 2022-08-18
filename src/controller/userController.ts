import { responseEncoding } from 'axios';
import { Request } from 'express';
import { Response } from 'express';
import { UserModel } from "../model/userModel";



export class UserController {
    private model : UserModel;

    constructor(model:UserModel){
        this.model=model
    }

    // Méthodes:
    getUsers = async(req: Request, res :Response)=>{
       const data = await this.model.getUsers().then(res=> res.data)   
        res.render("userList", {data})
    }
    deleteUser = async(req:Request, res: Response)=>{
        this.model.deleteUser(req.params.id)
        res.redirect("/userList")
    }
    detailUser = async(req: Request, res : Response) => {
        const data = await this.model.detailUser(req.params.id).then(resu=>resu.data)
        console.log(data);
        
        res.render("detailUser", {data})
    }
    addUser = (req:Request, res:Response) => {
        const data = req.body
        this.model.addUser(data)
        console.log(data);
        res.redirect("/userList")
    }
    addUserPage = (req:Request, res:Response) =>{
        res.render("addUser")
    }
    modifUser = (req : Request, res: Response) => {
        const data = req.body
        this.model.modifUser(data)
        res.render("modifUser")
    }
}