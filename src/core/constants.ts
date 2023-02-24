import { json, urlencoded } from 'express';
import * as cors from 'cors';

export const enum Order {
    Ascending = 'asc',
    AscendingNullsLast = 'asc nulls last',
    Descending = 'desc',
    DescendingNullsLast = 'desc nulls last',
}
export const enum ModelType {
    Info = 'InfoModel',
    Entity = 'EntityModel',
}

export const DefaultAPIPath = 'api/';
export const DefaultAPIVersion = 'v1/';
export const DefaultPort = 4000;
export const DefaultDatabaseDedicatedConnection = false;
export const DefaultDatabaseDedicatedConnectionRatio = 0.2;

/**
 * An enumeration of supported connection types
 */
export const enum ConnectType {
    /**
     * Hybrid connections are not specialized for replicated database
     * environments as they permit queries, insertions, updates, and
     * deletions.
     */
    Hybrid = 'hybrid',

    /**
     * Replica connections are a specialized connection type for queries
     * of the database; no inserts, updates, or deletions are allowed.
     */
    Replica = 'replica',

    /**
     * Master connections are a specialized connection type for Insert, Update, and Delete commands in a replicated
     * database environment.
     */
    Master = 'master',
}

/**
 * JSON Primitive types
 */
export const enum JsonTypes {
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
}

/**
 * Database Types
 */
export const enum DbTypes {
    Text = 'text',
    Binary = 'binary',
    Numeric = 'numeric',
    Boolean = 'boolean',
    Date = 'date',
}

export const EntityMetadataMapKey = 'entity:map';

/**
 * The key by which the table name is stored in a model's meta data
 */
export const EntityTableNameKey = 'entity:tableName';

/**
 * The key by which the schema name is stored in a model's meta data
 */
export const EntitySchemaNameKey = 'entity:schemaName';

/**
 * The key by which the column specificiation map is stored in a model's
 * meta data
 */
export const EntityColumnMapKey = 'entity:columnMap';

/**
 * The key by which the relation specification map is stored in a model's
 * meta data
 */
export const EntityRelationMapKey = 'entity:relationMap';

export const ColumnNotFoundError = 'error:column-not-found';
