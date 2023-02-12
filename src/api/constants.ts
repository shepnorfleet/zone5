import { json, urlencoded } from 'express';
import * as cors from 'cors';

export const enum Order {
    Ascending = 'asc',
    AscendingNullsLast = 'asc nulls last',
    Descending = 'desc',
    DescendingNullsLast = 'desc nulls last',
}

export const DefaultAPIPath = 'api/';
export const DefaultAPIVersion = 'v1/';
export const DefaultPort = 4000;
export const DefaultDatabaseDedicatedConnection = false;
export const DefaultDatabaseDedicatedConnectionRatio = 0.2;
export const DefaultMiddleware = [cors(), json, urlencoded];
export const enum ConnectType {
    Hybrid = 'hybrid',
    Read = 'read',
    Write = 'write',
}
