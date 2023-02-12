import { RouterOptions } from 'express';
import { Middleware } from '@/api/types';
import { DbConfigSet, DbConfig, ConnectType } from '@/api/db';
import { DbDriver } from './db/DbDriver';

/**
 * Zone 5 Configuration
 */
export interface Zone5Config {
    /**
     * The path to access the api
     * default: 'api/'
     */
    apiPath?: string;

    /**
     * The api version number; appended to the apiPath
     * default: 'v1/'
     */
    apiPathVersion?: string;

    /**
     * The port the micro service will listen on
     * default: 4000
     */
    listenPort?: number;

    /**
     * The middleware to register with express router
     */
    middleware: Array<Middleware>;

    /**
     * Database Driver, specify PgDriver, MySqlDriver, SqlLite3Driver, etc...
     */
    dbDriver: DbDriver;

    /**
     * Used to provide additional options to the express router
     *
     * default: {
     *  strict: true
     * }
     */
    routerOptions?: RouterOptions;

    /**
     * The developer must provide the function to configure express middleware
     * and set database configuration
     *
     * @param router
     *        Use the router to apply express middleware
     * @param setDbConfig
     *        A function you must call with the database configuration
     */
    configure: (setMiddleWare: (middleware: Array<Middleware>) => void) => void;

    /**
     * Allows the developer to do whatever processing is necessary at certain
     * stages of execution
     */
    callback?: {
        /**
         * Before the microservice starts listening for a request
         */
        beforeStart: () => void;

        /**
         * After the microservice starts listening for a request
         */
        afterStart: () => void;

        /**
         * Before the microservice stops listening for a request
         */
        beforeStop: () => void;

        /**
         * After the microservice stops listening for a request
         */
        afterStop: () => void;
    };
}
