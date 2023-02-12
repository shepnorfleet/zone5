import { DbResult } from "@/api/db/DbResult";
import { DbEntityType } from "@/api/db/DbEntityType";

export class PgResult implements DbResult {
    async fetchNext(): Promise<DbEntityType> {
        return new Promise((resolve, reject) => {});
    }

    async fetchAll(limit?: number): Promise<Array<DbEntityType>> {
        return new Promise((resolve, reject) => {});
    }
}
