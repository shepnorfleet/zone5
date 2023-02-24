import { ControllerCTOR } from 'core/types';
import { Registrar } from 'core/Registrar';
import { Model } from 'models/Model';

const Controller = <T extends Model>(ctor: ControllerCTOR<T>) => {
    return (name: string, path: string) => {
        Registrar.singleton().register(name, path, ctor);
    };
};

export default Controller;
