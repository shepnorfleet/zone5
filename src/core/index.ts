import { Request as ExRequest, Response } from 'express';
import { DbConfig, Database, DbDriver, DbTransaction } from 'core/db';

interface Request extends ExRequest {
    transaction: Transaction;
}

export { Request, Response, Transaction };
