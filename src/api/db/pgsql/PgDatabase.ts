import { DbDatabase } from "@/api/db/DbDatabase";
import { PgWrapper } from "@/api/db/pgsql/PgWrapper";
import { PgConfig } from "@/api/db/pgsql/PgConfig";
import { PgTransaction } from "@/api/db/pgsql/PgTransaction";
import { PgStatement } from "@/api/db/pgsql/PgStatement";
import { PgResult } from "@/api/db/pgsql/PgResult";

export class PgDatabase implements DbDatabase {
    private _id: number;
    private _config?: PgConfig;
    private _wrapper?: PgWrapper;
    private _transaction?: PgTransaction;

    private static _sequence: number = 1;

    public get id(): number {
        return this._id;
    }

    /**
     *
     */
    public get config(): PgConfig {
        if (this._wrapper) {
            return this._wrapper.config;
        } else if (this._config) {
            return this._config;
        } else {
            throw new Error(
                "Missing configuration; was object initialized correctly?"
            );
        }
    }

    /**
     * CTOR
     *
     * @param wrapper
     *        If run from a pool; a wrapper is provided
     *
     */
    public constructor(initializer: PgConfig | PgWrapper) {
        this._id = PgDatabase._sequence++;

        if (initializer instanceof PgWrapper) {
            this._wrapper = initializer;
        } else if (initializer) {
            this._config = initializer;
        }
    }

    /**
     * Connect to the database
     */
    public connect(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Close the connection to the database
     */
    public close(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this._wrapper) {
                this._wrapper.checkin();
            } else {
                //close connection
            }
        });
    }

    public disconnect(): Promise<void> {
        return Promise.resolve();
    }

    public begin(): Promise<PgTransaction> {
        return new Promise((resolve, reject) => {});
    }

    public prepare(sql: string): Promise<PgStatement> {
        return new Promise((resolve, reject) => {});
    }

    public execute(sql: string): Promise<PgResult> {
        return new Promise((resolve, reject) => {});
    }
}
