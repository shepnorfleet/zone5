import { PgDatabase } from '@/api/db/pgsql/PgDatabase';
import { PgPool } from '@/api/db/pgsql/PgPool';
import { PgConfig } from '@/api/db/pgsql/PgConfig';
import { ConnectType } from '..';

/**
 *
 */
export class PgWrapper {
    private _pool: PgPool;
    private _database: PgDatabase;
    private _available: boolean;
    private _last_used: number;
    private _connectType: ConnectType;

    /**
     *
     */
    public get config(): PgConfig | null {
        return this._pool.getConfig(this._connectType);
    }

    /**
     *
     */
    public get available(): boolean {
        return this.available;
    }

    /**
     *
     * @param pool
     */
    public constructor(pool: PgPool, type: ConnectType) {
        this._pool = pool;
        this._database = new PgDatabase(this);
        this._available = true;
    }

    /**
     *
     * @returns
     */
    public checkout(): PgDatabase | false {
        let rVal: PgDatabase | false = false;

        if (this._available) {
            this._available = false;

            rVal = this._database;
        }

        return rVal;
    }

    public checkin(): void {
        this._available = true;
        this._last_used = new Date().getTime();
    }

    /**
     *
     */
    public expired(now: number): boolean {
        let rVal = false;

        //We don't expire in-use connections
        if (this._available) {
            let config = (this.config.rVal = now - this._last_used > maxAge);
        }

        return rVal;
    }
}
