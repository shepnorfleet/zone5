import { DbTransaction } from "@/api/db/DbTransaction";
import { DbStatement } from "@/api/db/DbStatement";
import { DbResult } from "@/api/db/DbResult";

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
