import { DTO, KeyType, KeyBatch, RequestOptions } from 'core/types';

/**
 *
 */
export interface Service<K extends KeyType> {
    create(dto: DTO, options?: RequestOptions): DTO;
    readBatch(batch: KeyBatch<K>, options?: RequestOptions): Array<DTO>;
    readAll(options?: RequestOptions): Array<DTO>;
    readOne(key: K, options?: RequestOptions): DTO;
    update(key: K, dto: DTO, options?: RequestOptions): DTO;
    delete(key: K, dto: DTO, options?: RequestOptions): DTO;
}
