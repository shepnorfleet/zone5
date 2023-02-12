import { DbConnectionManager } from '@/api/db/DbConnectionManager';
import { DbConfig } from '@/api/db/DbConfig';
import { DbConfigSet } from '@/api/db/types';
import { DbPoolConfig } from '@/api/db/DbPoolConfig';

export interface DbDriver {
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
    manager: DbConnectionManager;

    /**
     * Connection configurations by connect type (read/write/hybrid)
     */
    configSet: DbConfigSet<DbConfig>;

    /**
     * Pool configuration when connection manager is a pool
     */
    pool?: DbPoolConfig;
}
