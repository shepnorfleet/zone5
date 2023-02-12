import { ConnectType } from "@/api/constants";
import { DbConfig } from "@/api/db/DbConfig";

export type KeyValue = string | number;
export type KeyArray = Array<KeyValue>;
export type Key = KeyValue | KeyArray;
export type EntityKey = string;
export type EntityValue = string | number | boolean;
export type DbConfigSet<T extends DbConfig> = Record<ConnectType, T>;
