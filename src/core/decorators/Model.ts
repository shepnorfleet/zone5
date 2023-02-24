import 'reflect-metadata';
import { MessageCTOR, ModelCTOR } from 'core/types';
import { ModelType } from 'core/constants';

const modelTypeKey = Symbol('modelType');

/**
 *
 * @param constructor
 */
export function Message(constructor: MessageCTOR) {
    Reflect.defineProperty(constructor, modelTypeKey, ModelType.Info);
}

/**
 *
 * @param tableName
 * @param schemaName
 */
export function Table(tableName: string, schemaName?: string) {}
