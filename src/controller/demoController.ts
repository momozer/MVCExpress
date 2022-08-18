import { Response, Request } from 'express';
import { DemoModel } from '../model/demoModele';

export class DemoController {

    // Attributs:
    private model : DemoModel;
    
    constructor(model : DemoModel) {
        this.model = model 
    }
    // Méthodes:
    getString = (req:Request, res:Response) => {
        const data = this.model.getData();
        res.render('demo', {data})
    }

    getPage = (req:Request, res:Response) => {
        res.render('page')
    }

    getUserList = (req:Request, res:Response) => {
        res.render('userList')
    }
    

    postString = (req:Request, res: Response) => {
        res.send(req.body)
    }
}