import { DbConfig } from "@/api/db/DbConfig";

export interface PgConfig extends DbConfig {
    /**
     * The database host being connected to
     */
    host: string;

    /**
     * The port on the database host we are connecting to
     */
    port: number;

    /**
     * The user we are using to log into the database with
     */
    user: string;

    /**
     * The password we are using to log into the database with
     */
    password: string;

    /**
     * The name of the database we are connecting with, e.g. 'accounting'
     */
    dbName: string;
}
