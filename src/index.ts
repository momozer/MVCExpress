import express, {Request, Response} from "express";
import demoRouter from "./router/demoRouter";
import * as path from "path";
import 'dotenv/config'
import usersRouter from "./router/usersRouter";

// On instancie express:
const app = express();
const port = process.env.PORT;

// Ceci est un Middleware: éléments ultra utilisés en développement. Il faut le mettre au dessus du code afin qu'il se lance avant. 
app.use(express.json())
app.use(express.urlencoded())

app.use(demoRouter);
app.use("/userList", usersRouter);

// mise en place de Bootstrap
app.use('/bootstrap', express.static(path.join(process.cwd(), 'node_modules/bootstrap/dist/css')));

// mise en place du dossier public
app.use('/public', express.static(path.join(process.cwd(), '/src/public')))

// Configuration de EJS:
app.set('views', path.join(process.cwd(), 'src/view'));
app.set('view engine', 'ejs');

// On lance le serveur:
app.listen(port , () => {
    console.log(`serveur lancé sur le port ${port}`);    
})