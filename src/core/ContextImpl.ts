import { Context } from 'core/Context';
import { DbTransaction } from 'core/db';
import { Zone5 } from 'core/Zone5';
import { Security } from 'core/Security';
import { ApiRequest } from 'core/ApiRequest';

/**
 * The nominal implementation of the Zone5 Context interface
 */
export class ContextImpl implements Context {
    private _application: Zone5;
    private _transaction: DbTransaction;
    private _security: Security;

    /**
     * CTOR
     *
     * @param service
     *        The Zone5 instance of the service
     */
    constructor(application: Zone5, request: ApiRequest) {
        this._application = application;
        this._security = new Security(this, request);
    }

    /**
     * Retrieve the Zone5 Application instance
     *
     * @return Zone5
     */
    public get application(): Zone5 {
        return this._application;
    }

    /**
     * Get the access security object for binding request security functions.
     *
     * @returns Security
     */
    public get security(): Security {
        return this._security;
    }

    /**
     * Retrieve the current database transaction
     *
     * @returns DbTransaction
     */
    public get transaction(): DbTransaction {
        return this._transaction;
    }
}
