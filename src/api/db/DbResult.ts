import { DbEntityType } from "@/api/db/DbEntityType";

export interface DbResult {
    fetchNext(): Promise<DbEntityType>;

    fetchAll(limit?: number): Promise<Array<DbEntityType>>;
}
