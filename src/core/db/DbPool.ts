import { ConnectType } from 'core/constants';
import { DbDatabase } from 'core/db/DbDatabase';
import { DbConnectionManager } from 'core/db/DbConnectionManager';

export interface DbPool extends DbConnectionManager {
    acquire(connectType?: ConnectType): Promise<DbDatabase>;
    release(connection: DbDatabase): Promise<void>;
}
