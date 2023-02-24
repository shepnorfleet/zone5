/**
 * Database configuration interface
 */
export interface DbConfig
    extends Record<
        string,
        | string
        | number
        | boolean
        | Record<
              string,
              | string
              | number
              | boolean
              | ((...args: unknown[]) => void)
              | { [key: string]: unknown }
              | null
          >
        | undefined
    > {
    /**
     * The database host being connected to
     */
    host?: string;

    /**
     * The port on the database host we are connecting to
     */
    port?: number;

    /**
     * The user we are using to log into the database with
     */
    user?: string;

    /**
     * The password we are using to log into the database with
     */
    password?: string;

    /**
     * The name of the database we are connecting with, e.g. 'accounting'
     */
    dbName?: string;

    /**
     * Connection options; many database require additional configuration to connect.
     */
    options?: Record<
        string,
        | string
        | number
        | boolean
        | ((...args: unknown[]) => void)
        | { [key: string]: unknown }
        | null
    >;
}
