import { namex } from 'core/types';

export namespace Utility {
    /**
     * Convert property to a property name string by passing an arrow function
     * expression to the property
     *
     * @param instance
     *        An instance of the object that has the property you want to query
     * @param expression
     *        The property getter arrow function expression
     *
     * @returns string
     *          The name of the property provided in the expression
     */
    export function nameof<T extends object>(
        instance: T,
        expression: namex<T>
    ): string {
        const mapper: { [property in keyof T]: () => string } = {} as {
            [property in keyof T]: () => string;
        };

        Object.keys(instance).map(
            (name) => (mapper[name as keyof T] = () => name)
        );

        return expression(mapper)();
    }
}
