import { DbConnectionManager } from 'core/db';
import { Identity } from 'core/types';
import { Zone5Config } from 'core/Zone5Config';
import { Security } from './Security';
import { Zone5 } from './Zone5';

export interface Context<RoleType = string> {
    getStartTime(): number;
    getDbManager(): DbConnectionManager;
    getZone5Config(): Zone5Config<RoleType>;
    getSecurity(request: Request): Security | null;
}
