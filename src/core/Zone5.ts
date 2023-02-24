import { Zone5Config } from 'core/Zone5Config';
import { Server } from 'node:http';
import express, { Express, Router } from 'express';
import { Context } from 'core/Context';
import { ContextImpl } from 'core/ContextImpl';

/**
 * Zone5 Service Object
 */
export class Zone5 {
    private readonly _config: Zone5Config;
    private _context: Context;
    private _app: Express;
    private _router: Router;
    private _server: Server | null;

    private static instance: Zone5 | null = null;

    /**
     * Returns a copy of the Zone5Configuration
     */
    public get config(): Zone5Config {
        return this._config;
    }

    /**
     * CTOR
     *
     * @param config
     */
    private constructor(config: Zone5Config) {
        this._config = config;
        this._app = express();
        this._router = Router(this.config.routerOptions);
        this._context = new ContextImpl(this);
    }

    /**
     * Retrieve the Express application
     *
     * @return Express
     */
    public getApp(): Express {
        return this._app;
    }

    /**
     * Retrieve the Router for the application
     *
     * @return Router
     */
    public getRouter(): Router {
        return this._router;
    }

    /**
     *
     */
    public listen() {
        //Configure Router with Middleware
        if (this.config.middleware && this.config.middleware.length > 0) {
            this._router.use(...this.config.middleware);
        }

        //TODO: Register Decorated Controllers

        //Tranfer router to the express app
        this._app.use(this._router);

        if (this.config.callback && this.config.callback.beforeStart) {
            this.config.callback.beforeStart.call(this);
        }

        this._server = this._app.listen(this.config.listenPort, () => {});
    }

    /**
     * Stop the Zone5 server
     */
    public stop() {
        if (this.config.callback && this.config.callback.beforeStop) {
            this.config.callback?.beforeStop.call(this);
        }

        if (this._server) {
            this._server.close((err?: Error) => {
                if (err) {
                    console.error(err);
                }
                if (this.config.callback && this.config.callback.afterStop) {
                    this.config.callback.afterStop.call(this, err);
                }
            });
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
            Zone5.instance.listen();
        } else {
            throw new Error('Error: Zone5 may only be started once.');
        }
    }
}

export type { Zone5Config };
