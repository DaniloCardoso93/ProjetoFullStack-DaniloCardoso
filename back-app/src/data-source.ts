import { DataSource } from "typeorm"
import "reflect-metadata"
import "dotenv/config"
import User  from "./entities/user.entities"
import Contact from "./entities/contact.entities"
import {InitialMigration1679521749960} from "./migrations/1679521749960-InitialMigration"
import { AddIsActive1679584116743 } from "./migrations/1679584116743-AddIsActive"
import { ContactRemoveUnique1679602244979 } from "./migrations/1679602244979-ContactRemoveUnique"
import { RemoveDeleteAt1679607015850 } from "./migrations/1679607015850-RemoveDeleteAt"


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
            migrations:[InitialMigration1679521749960, AddIsActive1679584116743, ContactRemoveUnique1679602244979, RemoveDeleteAt1679607015850],
        })
