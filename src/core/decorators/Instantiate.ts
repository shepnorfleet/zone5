import 'reflect-metadata';
import { Context } from 'core/Context';

export const Instantiate = (constructor: new (context: Context) => void) => {
    return (...args: Array<unknown>) => {};
};
