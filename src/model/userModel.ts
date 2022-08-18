import { UserController } from './../controller/userController';
import axios from "axios";
import "dotenv/config";

export class UserModel {

    // Attributs:
    URI = process.env.URI || "http://localhost:3000/users"
    // Méthodes:
getUsers = () => {
   return axios.get(this.URI)   
}
deleteUser = (id : string) =>{
    axios.delete(`${this.URI}/${id}`)
}
detailUser = (id : string) => {
    return axios.get(`${this.URI}/${id}`) 
}
addUser = (data : any) => {
    return axios.post(`${this.URI}`, {data})
}
modifUser = (id : string) => {
    return axios.post(`${this.URI}`, id)
}
}