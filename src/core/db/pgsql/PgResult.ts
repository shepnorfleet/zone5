import { DbResult } from 'core/db/DbResult';
import { DbEntityType } from 'core/db/DbEntityType';

export class PgResult implements DbResult {
    async fetchNext(): Promise<DbEntityType> {
        return new Promise((resolve, reject) => {});
    }

    async fetchAll(limit?: number): Promise<Array<DbEntityType>> {
        return new Promise((resolve, reject) => {});
    }
}
