import { PgDatabase } from 'core/db/pgsql/PgDatabase';
import { PgPool } from 'core/db/pgsql/PgPool';
import { PgConfig } from 'zone5/db/pgsql/PgConfig';
import { ConnectType } from '..';

/**
 * The wrapper is used by the pool to manage the connection in the pool
 */
export class PgWrapper {
    private _pool: PgPool;
    private _database: PgDatabase;
    private _available: boolean;
    private _last_used: number;
    private _connected: number;
    private _connectType: ConnectType;

    /**
     * Tracks the availability of the connection; a value of true indicates
     * the connection is available.
     *
     * @return boolean
     */
    public get available(): boolean {
        return this.available;
    }

    /**
     * A reference to the pool this wrapper is tracking a connection for
     *
     * @param pool
     */
    public constructor(pool: PgPool, type: ConnectType) {
        this._pool = pool;
        this._database = new PgDatabase(this);
        this._available = true;
        this._last_used = 0;
        this._connected = 0;
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
        if (this._available && this.config !== null) {
        }

        return rVal;
    }
}
