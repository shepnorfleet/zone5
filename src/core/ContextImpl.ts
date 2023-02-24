import { Context } from 'core/Context';
import express, { Express, Router } from 'express';
import { Server } from 'http';
import { ConnectType } from 'core/constants';
import { DbConnectionManager, DbDatabase } from 'core/db';
import { Zone5 } from 'core/Zone5';
import { Zone5Config } from './Zone5Config';
import { Security } from './Security';

/**
 * The nominal implementation of the Zone5 Context interface
 */
export class ContextImpl implements Context {
    private _service: Zone5;
    private _manager: DbConnectionManager;
    private _startTime: number;

    /**
     * CTOR
     *
     * @param service
     *        The Zone5 instance of the service
     */
    constructor(service: Zone5) {
        const driver = service.config.dbDriver;

        //Initialize Members
        this._manager = new driver.manager(driver);
        this._service = service;
    }

    /**
     *
     * @returns
     */
    public getZone5Config(): Zone5Config {
        return this._service.config;
    }

    /**
     * Retrieve the time the server started listening for connectionss
     *
     * @returns number time in milliseconds from epoch
     */
    public getStartTime(): number {
        return this._startTime;
    }

    /**
     * Retrieve the database connection manager
     *
     * @returns DBConnectionManager
     */
    public getDbManager(): DbConnectionManager {
        return this._manager;
    }

    /**
     *
     * @param request
     * @returns
     */
    public getSecurity(request: Request): Security | null {
        let rVal = null;

        try {
            rVal = new Security(this, request);
        } catch (e) {
            console.error(e);
        }

        return rVal;
    }
}
