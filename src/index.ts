import * as cors from 'cors';
import { json, urlencoded } from 'express';
import { Zone5, Zone5Config } from 'core/Zone5';
import { Converter, DbTypes, Identity, JsonTypes } from 'core/types';
import { ConnectType } from 'core/constants';
import { PgPool } from 'core/db/pgsql';

//Start Zone5
Zone5.start({
    apiPath: '/api',
    apiPathVersion: '/v1',
    listenPort: 4000,
    middleware: [cors(), urlencoded(), json()],
    identifyUser: function (request: Request): Identity<string> | null {
        return null;
    },
    dbDriver: {
        name: 'PostgreSQL',
        version: '14',
        manager: PgPool,
        pool: {
            poolMin: 2,
            poolMax: 10,
            poolDedicated: false,
            poolRatio: 0.2,
        },
        configSet: {
            [ConnectType.Replica]: {
                host: 'localhost',
                port: 5432,
                dbName: 'postgres',
                user: 'postgres',
                password: 'test123!',
            },
            [ConnectType.Master]: {
                host: 'localhost',
                port: 5432,
                dbName: 'postgres',
                user: 'postgres',
                password: 'test123!',
            },
        },
        converters: [
            {
                jsonType: JsonTypes.Number,
                dbType: DbTypes.Date,
                toJSON: (value: string): number => new Date(value).getTime(),
                toDatabase: (value: number) => new Date(value).toISOString(),
            } as Converter<string>,
        ],
    },
    routerOptions: {
        strict: true,
    },
    callback: {
        beforeStart: function () {
            console.log('Zone5 is preparing for launch...');
        },
        afterStart: function () {
            console.log(
                `Zone5 is now active on port ${this.config.listenPort}`
            );
        },
        beforeStop: function () {
            console.log(`Zone5 is preparing to stop...`);
        },
        afterStop: function () {
            console.log(`Zone5 has stopped.`);
        },
    },
} as Zone5Config);
