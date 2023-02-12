import { DbDriver } from '@/api/db/DbDriver';
import { DbConfigSet } from '@/api/db/types';
import { PgConfig } from '@/api/db/pgsql/PgConfig';

export interface PgDriver extends DbDriver {
    /**
     * Connection configurations by connect type (read/write/hybrid)
     */
    configSet: DbConfigSet<PgConfig>;
}
