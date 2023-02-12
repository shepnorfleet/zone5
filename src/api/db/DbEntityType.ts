import type { EntityKey, EntityValue } from '@/api/db/types';

export interface DbEntityType extends Record<EntityKey, EntityValue> {
}
