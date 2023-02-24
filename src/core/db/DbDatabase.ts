import { DbTransaction } from 'core/db/DbTransaction';
import { DbStatement } from 'core/db/DbStatement';
import { DbResult } from 'core/db/DbResult';

/**
 * standardized Database interface
 */
export interface DbDatabase {
    begin(): Promise<DbTransaction>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    prepare(sql: string): Promise<DbStatement>;
    execute(sql: string): Promise<DbResult>;
}
