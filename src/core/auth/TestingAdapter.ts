import { ApiRequest } from 'core/ApiRequest';
import {
    AuthAdapter,
    AuthResult,
    PayloadAuthResult,
} from 'core/auth/AuthAdapter';
import { Zone5 } from 'core/Zone5';

/**
 * Testing auth adapter permits access to all endpoints of the controller.
 * This adapter should only be used with controllers that are used for
 * testing purposes.
 */
export class TestingAdapter implements AuthAdapter<null> {
    private _name: string;

    private static instance: TestingAdapter | null = null;

    /**
     * Adapater name
     */
    public get name(): string {
        return this._name;
    }

    /**
     * CTOR
     */
    private constructor() {
        this._name = 'testing';
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
            permit: true,
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
            permit: true,
        };
    }

    /**
     * Factory for instantiating and registering the built-in auth adapter.
     *
     * @param adapters
     *
     */
    public static register(zone5: Zone5) {
        if (TestingAdapter.instance === null) {
            TestingAdapter.instance = new TestingAdapter();

            zone5.addAuthAdapter(TestingAdapter.instance);
        } else {
            throw new Error(
                'TestingAdapter was already instantiated; adapters are singletons and should not be reinstantiated.'
            );
        }
    }
}
