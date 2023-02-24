import 'reflect-metadata';
import { ColumnMap, ColumnSpec, Entity, namex } from 'core/types';
import {
    ColumnNotFoundError,
    EntityColumnMapKey,
    EntityMetadataMapKey,
    EntitySchemaNameKey,
    EntityTableNameKey,
} from 'core/constants';
import { Utility } from 'core/Utility';

/**
 * A Model in this context is only used to describe database entities.
 */
export abstract class Model implements Entity {
    /**
     *
     */
    public get tableName() {
        return Reflect.getMetadata(
            EntityMetadataMapKey,
            Object.getPrototypeOf(this).constructor,
            EntityTableNameKey
        );
    }

    /**
     *
     */
    public get schemaName() {
        return Reflect.getMetadata(
            EntityMetadataMapKey,
            Object.getPrototypeOf(this).constructor,
            EntitySchemaNameKey
        );
    }

    /**
     *
     * @param propertyName
     * @returns
     */
    public getColumn(propertyName: string): ColumnSpec | null {
        let rVal: ColumnSpec | null = null;
        const columnMap: ColumnMap = Reflect.getMetadata(
            EntityMetadataMapKey,
            Object.getPrototypeOf(this).constructor,
            EntityColumnMapKey
        );

        if (columnMap && columnMap[propertyName]) {
            rVal = columnMap[propertyName];
        }

        return rVal;
    }

    /**
     *
     * @param propertyName
     * @returns
     */
    public getColumnName(propertyName: string): string | undefined {
        const column = this.getColumn(propertyName);
        let rVal = undefined;

        if (column !== null) {
            rVal = column.name;
        }

        return rVal;
    }

    /**
     *
     * @returns
     */
    public getPropertyNames(): string[] {
        let rVal: Array<string> = [];
        const columnMap: ColumnMap = Reflect.getMetadata(
            EntityMetadataMapKey,
            Object.getPrototypeOf(this).constructor,
            EntityColumnMapKey
        );

        if (columnMap) {
            for (const propertyName in columnMap) {
                rVal.push(propertyName);
            }
        }

        return rVal;
    }

    /**
     *
     */
    public getKeyPropertyNames(): string[] {
        type KeyColumn = {
            propertyName: string;
            column: ColumnSpec;
            keyOrder: number;
        };

        let columns: Array<KeyColumn> = [];

        const columnMap: ColumnMap = Reflect.getMetadata(
            EntityMetadataMapKey,
            Object.getPrototypeOf(this).constructor,
            EntityColumnMapKey
        );

        if (columnMap) {
            for (const propertyName in columnMap) {
                const column = columnMap[propertyName];
                if (column.keyOrder) {
                    columns.push({
                        propertyName,
                        column,
                        keyOrder: column.keyOrder,
                    });
                }
            }
        }

        return columns
            .sort((a, b) =>
                a.keyOrder < b.keyOrder ? -1 : a.keyOrder > b.keyOrder ? 1 : 0
            )
            .map((keyColumn) => keyColumn.propertyName);
    }

    /**
     *
     */
    public getSortPropertyNames(): string[] {
        type SortColumn = {
            propertyName: string;
            column: ColumnSpec;
            sortLevel: number;
        };

        let columns: Array<SortColumn> = [];

        const columnMap: ColumnMap = Reflect.getMetadata(
            EntityMetadataMapKey,
            Object.getPrototypeOf(this).constructor,
            EntityColumnMapKey
        );

        if (columnMap) {
            for (const propertyName in columnMap) {
                const column = columnMap[propertyName];
                if (column.sortLevel) {
                    columns.push({
                        propertyName,
                        column,
                        sortLevel: column.sortLevel,
                    });
                }
            }
        }

        return columns
            .sort((a, b) =>
                a.sortLevel < b.sortLevel
                    ? -1
                    : a.sortLevel > b.sortLevel
                    ? 1
                    : 0
            )
            .map((sortColumn) => sortColumn.propertyName);
    }

    /**
     * Convert property reference to a string value
     *
     * ```
     * const columnName = model.columnName((model)=>model.propertyName);
     * ```
     *
     * @param name
     *        The property name reference
     *
     * @returns ColumnSpec|null
     */
    public column(expression: namex<this>): string {
        let rVal: string = ColumnNotFoundError;
        const propertyName = Utility.nameof<this>(this, expression);

        if (propertyName) {
            const column = this.getColumn(propertyName);

            if (column !== null) {
                rVal = column.name;
            }
        }

        return rVal;
    }
}
