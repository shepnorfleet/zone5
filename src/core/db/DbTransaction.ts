export interface DbTransaction {
    commit(): Promise<void>;
    rollback(): Promise<void>;
    isValid(): boolean;
    isFinished(): boolean;
}
