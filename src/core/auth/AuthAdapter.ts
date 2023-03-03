import { ApiRequest } from 'core/ApiRequest';
import { Zone5 } from 'core/Zone5';

/**
 * AuthN/Z Result
 */
export interface AuthResult {
    permit: boolean;
    reason?: string;
}

/**
 * Same as for AuthResult but delivers payload to '/authenticate'
 * endpoint to be returned in the response.
 */
export interface PayloadAuthResult<T = Record<string, unknown> | null>
    extends AuthResult {
    payload?: T;
}

/**
 * The interface for authentication/authorization adapaters
 */
export interface AuthAdapter<T = Record<string, unknown> | null> {
    /**
     * Adapter Name
     */
    name: string;

    /**
     * Authenticate request; provides the option to return a payload for
     * the authenticate endpoint
     *
     * @param this
     *        The Zone5 Application
     * @param request
     *        The current request
     *
     * @returns PayloadAuthResult<T>
     *          The authentication result
     */
    authn: (request: ApiRequest) => PayloadAuthResult<T>;

    /**
     * Authorize request
     *
     * @param this
     *        The Zone5 Application
     * @param request
     *        The current request
     *
     * @returns AuthResult
     *          The authorization result
     */
    authz: (request: ApiRequest) => AuthResult;
}
