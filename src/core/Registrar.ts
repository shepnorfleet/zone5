import { randomUUID } from 'crypto';
import { Context } from 'core/Context';
import { Model } from 'models/Model';
import { Registration, ControllerCTOR } from 'core/types';

/**
 * The Registrar tracks all controllers in use.
 */
export class Registrar<T extends Model> {
    private controllers: Array<Registration<T>>;

    private static instance: Registrar<Model> | null = null;

    /**
     * CTOR
     */
    private constructor() {
        this.controllers = [];
    }

    /**
     * Registrer a controller; called during startup only
     *
     * @param name
     *        A human readable name for the controller
     * @param path
     *        The path the controller will be accessed from
     * @param ctor
     *        The constructor to instantiate the controller
     */
    public register(name: string, path: string, ctor: ControllerCTOR<T>) {
        this.controllers.push({
            id: randomUUID(),
            name,
            path,
            ctor,
            instance: null,
        });
    }

    /**
     * Called when the service is ready to start-up; all registrations should
     * be complete by this point.
     *
     * @param context
     *        The API Context Object
     */
    public launch(context: Context) {
        this.controllers.forEach((registration: Registration<T>) => {
            registration.instance = new registration.ctor(
                registration.id,
                registration.name,
                registration.path,
                context
            );
        });
    }

    /**
     * This Singleton class will be instantiated by the first evaluated
     * '@Controller' decorator evaluated and be reused througout the life of
     * the API server.
     *
     * @returns Registrar<T>
     */
    public static singleton<T extends Model>(): Registrar<T> {
        if (Registrar.instance === null) {
            Registrar.instance = new Registrar<T>();
        }

        return Registrar.instance;
    }
}
