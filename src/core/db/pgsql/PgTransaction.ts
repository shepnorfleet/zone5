import { DbTransaction } from 'core/db/DbTransaction';

class PgTransaction implements DbTransaction {
    commit(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    rollback(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    isFinished(): boolean {
        throw new Error('Method not implemented.');
    }
}

export { PgTransaction };
