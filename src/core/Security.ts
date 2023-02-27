import { Identity } from 'core/types';
import { Context } from 'core/Context';
import { Zone5Config } from 'core/Zone5Config';
import { ApiRequest } from 'core/ApiRequest';

/**
 * Endpoint access control methods will be bound to this class so that they
 * may check the identity object for permission whether that be a role check
 * or the user has a necessary attribute in their decoded user token packet.
 *
 * ```
 *  \@Get( '/doSomething',
 *          ValidationChain,
 *          function(this: Security): boolean { return this.identity.roles.indexOf('roleName') !== -1; })
 *   public doSomething(request: Request, response: Response): Promise<void> {...}
 * ```
 */
export class Security<RoleType = string> {
    private readonly _identity: Identity<RoleType> | null;

    /**
     * property getter for identity
     */
    public get identity(): Identity<RoleType> | null {
        return this._identity;
    }

    /**
     * CTOR
     *
     * @param context
     *        An implementation of the Context interface
     * @param request
     *        A service Request object
     */
    public constructor(context: Context, request: ApiRequest) {
        this._identity = (
            context.application.config as Zone5Config<RoleType>
        ).identifyUser(request);
    }
}
