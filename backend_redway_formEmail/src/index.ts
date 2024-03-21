import express from "express";
import routes from "./routes";
import cors from 'cors'

import { AppDataSource } from "./data-source";

import * as dotenv from 'dotenv';

const HOST = "0.0.0.0"

dotenv.config();

AppDataSource.initialize().then(async () => {
    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(routes)
    
    
    
    return app.listen(process.env.PORT, ()=>{
        console.log(`0.0.0.0:${process.env.PORT}`)
        return HOST})
})
