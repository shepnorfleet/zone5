import { ConnectType } from 'core/constants';
import { DbDatabase } from 'core/db/DbDatabase';

export interface DbConnectionManager {
    acquire(connectType?: ConnectType): Promise<DbDatabase>;
    release(connection: DbDatabase): Promise<void>;
}
