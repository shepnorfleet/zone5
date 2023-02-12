import { Zone5Config } from '@/api/Zone5Config';
import { NextHandleFunction } from 'connect';
import { DbConfig } from './api/db';

/**
 *
 */
const config: Zone5Config = {
    dbDriver: undefined,
    dbConfig: undefined,
    configure: function (
        setDbConfig: (dbConfig: DbConfig) => void,
        setMiddleWare: (middleware: NextHandleFunction[]) => void
    ): void {
        throw new Error('Function not implemented.');
    },
};
