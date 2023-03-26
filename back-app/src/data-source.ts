import { DataSource } from "typeorm"
import "reflect-metadata"
import "dotenv/config"
import User  from "./entities/user.entities"
import Contact from "./entities/contact.entities"
import { InitialMigration1679865037867 } from "./migrations/1679865037867-InitialMigration"





require('dotenv').config()

export const AppDataSource = 
    process.env.NODE_ENV === "test"
        ? new DataSource({
            type:"sqlite",
            database:":memory:",
            entities:["src/entities/*.ts"],
            synchronize:true
        })
        : new DataSource({
            type:"postgres",
            host: process.env.PGHOST,
            port: 5432,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [User, Contact],
            migrations:[InitialMigration1679865037867],
        })
