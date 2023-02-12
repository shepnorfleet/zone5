import 'reflect-metadata';
import { Context } from '@/api/Context';

export const Instantiate = (constructor: new (context: Context) => void) => {
    return (...args: Array<unknown>) => {};
};
