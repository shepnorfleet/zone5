import { DbStatement } from 'core/db/DbStatement';

export class PgStatement implements DbStatement {
    bind(
        value: string | number | boolean,
        position?: number | undefined
    ): void {}

    execute(): Result {
        throw new Error('Method not implemented.');
    }
}
