import { DbConnectionManager } from 'core/db/DbConnectionManager';
import { DbConfig } from 'core/db/DbConfig';
import { DbConfigSet, ManagerCTOR } from 'core/db/types';
import { DbPoolConfig } from 'core/db/DbPoolConfig';
import { Converter } from 'core/types';

export interface DbDriver<T extends DbConfig = DbConfig> {
    /**
     * Name of the database
     */
    name?: string;

    /**
     * Version of the database
     */
    version?: string;

    /**
     * Connection manager to use
     */
    manager: ManagerCTOR<T>;

    /**
     * Connection configurations by connect type (read/write/hybrid)
     */
    configSet: DbConfigSet<T>;

    /**
     * Pool configuration when connection manager is a pool
     */
    pool?: DbPoolConfig;

    /**
     * 'Json -> Database' and 'Database -> Json' Converters
     */
    converters?: Array<Converter>;
}
