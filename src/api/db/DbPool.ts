import { ConnectType } from '@/api/constants';
import { DbConfig } from '@/api/db/DbConfig';
import { DbDatabase } from '@/api/db/DbDatabase';
import { DbConnectionManager } from '@/api/db/DbConnectionManager';

export interface DbPool extends DbConnectionManager {
    acquire(connectType?: ConnectType): Promise<DbDatabase>;
    release(connection: DbDatabase): Promise<void>;
}
