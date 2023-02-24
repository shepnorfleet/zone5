import { ConnectType } from 'core/constants';
import { DbConfig } from 'core/db/DbConfig';
import { DbDriver } from 'core/db/DbDriver';
import { DbConnectionManager } from 'core/db/DbConnectionManager';

export type KeyValue = string | number;
export type KeyArray = Array<KeyValue>;
export type Key = KeyValue | KeyArray;
export type EntityKey = string;
export type EntityValue = string | number | boolean;
export type DbConfigSet<T extends DbConfig> = {
    [ConnectType.Replica]?: T;
    [ConnectType.Master]?: T;
    [ConnectType.Hybrid]?: T;
};
export type ManagerCTOR<T extends DbConfig> = new (
    driver: DbDriver<T>
) => DbConnectionManager;
