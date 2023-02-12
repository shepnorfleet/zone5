export interface DbStatement {
    bind(value: string | number | boolean, position?: number): void;
    execute(): Result
}