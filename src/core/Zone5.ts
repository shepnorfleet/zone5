import { Server } from 'node:http';
import express, { Express, Router } from 'express';
import { Zone5Config } from 'core/Zone5Config';
import { DbConnectionManager } from 'core/db';
import { Context } from 'core/Context';
import {
    getDoAfterStartCallback,
    getDoAfterStopCallback,
    getDoBeforeStartCallback,
    getDoBeforeStopCallback,
} from 'core/callbacks';

/**
 * Zone5 Service Object
 */
export class Zone5 {
    private readonly _config: Zone5Config;
    private _context: Context;
    private _express: Express;
    private _router: Router;
    private _server: Server | null;
    private _manager: DbConnectionManager;

    private static instance: Zone5 | null = null;

    /**
     * Returns a copy of the Zone5Configuration
     */
    public get config(): Zone5Config {
        return this._config;
    }

    /**
     * Retrieve the Express application
     *
     * @return Express
     */
    public get app(): Express {
        return this._express;
    }

    /**
     * Retrieve a reference to the API context
     *
     * @return Context
     */
    public get context(): Context {
        return this._context;
    }

    /**
     * CTOR
     *
     * @param config
     */
    private constructor(config: Zone5Config) {
        this._config = config;
        this._express = express();
        this._router = Router(this.config.routerOptions);
        this._server = null;

        if (config.dbDriver && config.dbDriver.manager) {
            this._manager = new config.dbDriver.manager(config.dbDriver);
        } else {
            throw new Error(
                'Error: Zone5 Configuration was missing the connection manager constructor.'
            );
        }
    }

    /**
     * Retrieve the connection manager instance
     *
     * @return DbConnectionManager
     */
    public get manager(): DbConnectionManager {
        return this._manager;
    }

    /**
     * Starting listening for network connections
     */
    public listen() {
        if (this._server === null) {
            const doBeforeStart = getDoBeforeStartCallback(this.config);
            const doAfterStart = getDoAfterStartCallback(this.config);

            //call 'Before Start' callback
            doBeforeStart.call(this);

            //Configure Router with Middleware
            if (this.config.middleware && this.config.middleware.length > 0) {
                this._router.use(...this.config.middleware);
            }

            //TODO: Register Decorated Controllers

            //Tranfer router to the express app
            this._express.use(this._router);

            this._server = this._express.listen(this.config.listenPort, () => {
                //call 'After Start' callback
                doAfterStart.call(this);
            });
        } else {
            throw new Error(
                'Error: A Call to start Zone5 was made; however, Zone5 was already running.'
            );
        }
    }

    /**
     * Stop the Zone5 server
     */
    public stop() {
        if (this._server !== null) {
            const doBeforeStop = getDoBeforeStopCallback(this.config);
            const doAfterStop = getDoAfterStopCallback(this.config);

            //call 'Before Stop' callback
            doBeforeStop.call(this);

            this._server.close((err?: Error) => {
                this._server = null;

                //call 'After Stop' callback
                doAfterStop.call(this, err);
            });
        } else {
            throw new Error(
                'Error: A Call to stop Zone5 was made; however, Zone5 is not running.'
            );
        }
    }

    /**
     * Start the Zone5 Server
     *
     * @param config
     *        A Zone5 configuration data structure
     */
    public static start(config: Zone5Config): void {
        if (Zone5.instance === null) {
            Zone5.instance = new Zone5(config);

            try {
                Zone5.instance.listen();
            } catch (e) {
                console.error(e);
            }
        } else {
            throw new Error('Error: Zone5 may only be started once.');
        }
    }
}

export type { Zone5Config };
