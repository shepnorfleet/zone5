import type { EntityKey, EntityValue } from 'core/db/types';

export interface DbEntityType extends Record<EntityKey, EntityValue> {}
