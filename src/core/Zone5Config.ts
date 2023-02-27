import { RouterOptions } from 'express';
import { Middleware, UserIdentifier } from 'core/types';
import { DbDriver } from 'core/db/DbDriver';
import { Zone5 } from 'core/Zone5';

/**
 * Zone5 Callbacks
 */
export interface Zone5Callbacks {
    /**
     * Before the microservice starts listening for a request
     */
    readonly doBeforeStart?: (this: Zone5) => void;

    /**
     * After the microservice starts listening for a request
     *
     * @param err
     *        An error object; if the startup failed for some reason.
     */
    readonly doAfterStart?: (this: Zone5) => void;

    /**
     * Before the microservice stops listening for a request
     */
    readonly doBeforeStop?: (this: Zone5) => void;

    /**
     * After the microservice stops listening for a request
     *
     *  @param err
     *         An error object; if the service encountered an error while
     *         stoping.
     */
    readonly doAfterStop?: (this: Zone5, err?: Error) => void;
}

/**
 * Zone 5 Configuration
 */
export interface Zone5Config<RoleType = string> {
    /**
     * Database Driver, specify PgDriver, MySqlDriver, SqlLite3Driver, etc...
     */
    readonly dbDriver: DbDriver;

    /**
     * Take a request and return a user's identity; if user not identified
     * then it returns a null value.
     *
     * @param request
     *        A Request object
     *
     * @returns Identity|null
     */
    readonly identifyUser: UserIdentifier<RoleType>;

    /**
     * The path to access the api
     * default: 'api/'
     */
    readonly apiPath?: string;

    /**
     * The api version number; appended to the apiPath
     * default: 'v1/'
     */
    readonly apiPathVersion?: string;

    /**
     * The port the micro service will listen on
     * default: 4000
     */
    readonly listenPort?: number;

    /**
     * The middleware to register with express router
     */
    readonly middleware?: Array<Middleware>;

    /**
     * Used to provide additional options to the express router
     *
     * default: {
     *  strict: true
     * }
     */
    readonly routerOptions?: RouterOptions;

    /**
     * Allows the developer to do whatever processing is necessary at certain
     * stages of execution
     */
    readonly callbacks?: Zone5Callbacks;
}
