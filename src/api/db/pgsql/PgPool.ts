import { ConnectType, DbPool } from '@/api/db';
import { PgDatabase } from '@/api/db/pgsql/PgDatabase';
import { PgWrapper } from '@/api/db/pgsql/PgWrapper';
import { PgConfig } from '@/api/db/pgsql/PgConfig';
import { PgConfigSet } from '@/api/db/pgsql/types';

export class PgPool implements DbPool {
    private _configSet: PgConfigSet;
    private _pool: Array<PgWrapper>;

    private static _interval: ReturnType<typeof setInterval>;
    private static _instance: PgPool | null = null;

    /**
     *
     */
    public get configSet(): PgConfigSet {
        return this._configSet;
    }

    public getConfig(connectType: ConnectType): PgConfig | null {
        let rVal: PgConfig | null = null;

        if (this.configSet[connectType]) {
            rVal = this.configSet[connectType];
        }

        return rVal;
    }

    /**
     *
     * @param config
     */
    private constructor(configSet: PgConfigSet) {
        this._pool = [];
        this._configSet = configSet;
    }

    /**
     *
     * @param type
     */
    public async acquire(type: ConnectType): Promise<PgDatabase> {
        return new Promise((resolve, reject) => {});
    }

    /**
     *
     * @param database
     */
    public async release(database: PgDatabase): Promise<void> {}

    /**
     *
     */
    public static watchdog() {
        const now = new Date().getTime();

        if (PgPool._instance !== null) {
            const expired = PgPool._instance._pool.filter((w: PgWrapper) =>
                w.expired(now)
            );
        }
    }

    public static singleton(configSet: PgConfigSet) {
        if (this._instance === null) {
            this._instance = new PgPool(configSet);

            PgPool._interval = setInterval(PgPool.watchdog, 300);
        } else {
            throw new Error('PgPool singleton arleady instantiated');
        }
    }
}
