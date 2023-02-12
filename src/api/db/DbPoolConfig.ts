export interface DbPoolConfig {
    /**
     * Database connection pooling; maintain minimum number of acquired connections
     *
     * Default: 2
     */
    poolMin?: number;

    /**
     * Database connection pooling; do not exceed maximum number of acquired connections
     *
     * Default: 10
     */
    poolMax?: number;

    /**
     * Dedicated Purpose Database Connections
     *
     * If true; allows for the specification of reader or writer connections (see 'poolRatio' settings for more information)
     * If false, all connections are 'read/write'.
     *
     * Default: false
     */
    poolDedicated?: boolean;

    /**
     * Dedicated Purpose Connection Ratio
     * A ratio of '0.2' results in one writer connection to every 5 reader connections.
     *
     * Default: 0.2 when 'poolDedicated' is true
     *          undefined when 'poolDedicated' is false.
     */
    poolRatio?: number;

    /**
     * Connections that sit idle for longer than the duration of this setting are remove from the
     * pool until minimum connections is reached.
     *
     * Unit: Milliseconds
     * Default: 60000
     */
    poolIdleTimeout?: number;
}
