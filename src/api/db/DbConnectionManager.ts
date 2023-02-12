import { ConnectType } from '@/api/constants';
import { DbDatabase } from '@/api/db/DbDatabase';

export interface DbConnectionManager {
    acquire(connectType?: ConnectType): Promise<DbDatabase>;
    release(connection: DbDatabase): Promise<void>;
}
