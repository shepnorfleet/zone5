import { DbTransaction } from 'core/db';
import { Security } from 'core/Security';
import { Zone5 } from 'core/Zone5';

/**
 *
 */
export interface Context {
    application: Zone5;
    security: Security;
    transaction: DbTransaction;
}
