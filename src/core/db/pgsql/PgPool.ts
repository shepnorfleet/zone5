import { ConnectType, DbConfig, DbPool } from 'core/db';
import { PgDatabase } from 'core/db/pgsql/PgDatabase';
import { PgWrapper } from 'core/db/pgsql/PgWrapper';
import { PgConfigSet } from 'core/db/pgsql/types';
import { DbDriver } from 'core/db/DbDriver';

export class PgPool implements DbPool {
    private _driver: DbDriver<DbConfig>;
    private _pool: Array<PgWrapper>;

    private static _interval: ReturnType<typeof setInterval>;
    private static _instance: PgPool | null = null;

    /**
     *
     */
    public get configSet(): PgConfigSet {
        return this._driver.configSet;
    }

    public getConfig(connectType: ConnectType): DbConfig | null {
        let rVal: DbConfig | null = null;

        if (this.configSet[connectType]) {
            rVal = this.configSet[connectType];
        }

        return rVal;
    }

    /**
     *
     * @param config
     */
    public constructor(driver: DbDriver<DbConfig>) {
        this._pool = [];
        this._driver = driver;
    }

    /**
     *
     * @param type
     */
    public async acquire(connectType?: ConnectType): Promise<PgDatabase> {
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
}
