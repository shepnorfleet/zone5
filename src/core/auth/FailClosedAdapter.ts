import { ApiRequest } from 'core/ApiRequest';
import {
    AuthAdapter,
    AuthResult,
    PayloadAuthResult,
} from 'core/auth/AuthAdapter';
import { Zone5 } from 'core/Zone5';

/**
 * FailClosed auth adapater is the default adapter for endpoints that do not
 * designate an adapter. This adapter permits no access by any user for any
 * reason. (fail-closed)
 */
export class FailClosedAdapter implements AuthAdapter<null> {
    private _name: string;

    private static instance: FailClosedAdapter | null = null;

    /**
     * The name of this auth adapater
     *
     * @returns string
     */
    public get name(): string {
        return this._name;
    }

    /**
     * CTOR
     */
    private constructor() {
        this._name = 'fail-closed';
    }

    /**
     * Permissive authentication method meant for Root controller
     *
     * @param this
     *        The Zone5 application
     * @param _request
     *        The current request object
     *
     * @returns PayloadAuthResult<null>
     */
    public authn(this: Zone5, _request: ApiRequest): PayloadAuthResult<null> {
        return {
            permit: false,
            reason: 'Controller defaulted to the fail-closed adapter',
            payload: null,
        };
    }

    /**
     * Permissive authorization method meant for Root controller
     *
     * @param this
     *        The Zone5 application
     * @param _request
     *        The current request object
     *
     * @returns PayloadAuthResult<null>
     */
    public authz(this: Zone5, _request: ApiRequest): AuthResult {
        return {
            permit: false,
            reason: 'Controller defaulted to the fail-closed adapter',
        };
    }

    public static register(zone5: Zone5) {
        if (FailClosedAdapter.instance === null) {
            FailClosedAdapter.instance = new FailClosedAdapter();

            zone5.addAuthAdapter(FailClosedAdapter.instance);
        } else {
            throw new Error(
                'FailClosedAdapter was already instantiated; adapters are singletons and should not be reinstantiated.'
            );
        }
    }
}
