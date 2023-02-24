import { Context } from 'core/Context';
import { DTO, KeyBatch, KeyType, ModelCTOR, RequestOptions } from 'core/types';
import { Model } from 'models/Model';
import { Service } from 'services/Service';

/**
 * The BaseService is a fully implemented CRUD service ready to use; and may
 * be extended to provide additional functionality.
 */
export class BaseService<K extends KeyType, T extends Model>
    implements Service<K>
{
    protected _context: Context;
    protected _model: T;

    /**
     * CTOR
     *
     * @param context
     *        The API Service Context instance.
     * @param modelCTOR
     *        The constructor of the model to use for reference
     */
    constructor(context: Context, modelCTOR: ModelCTOR<T>) {
        this._context = context;
        this._model = new modelCTOR();
    }

    /**
     * Create a new entity using the provided DTO
     *
     * @param dto
     *        The DTO to create an entity from
     * @param options
     *        The options provided through request; if any, to designate the
     *        desired response from the service.
     */
    create(dto: DTO, options?: RequestOptions | undefined): DTO {
        throw new Error('Method not implemented.');
    }

    /**
     * Read a batch of records using the record identifying key batch.
     *
     * @param batch
     *        An array of keys used to locate desired records for the response.
     * @param options
     *        The options provided through request; if any, to designate the
     *        desired response from the service.
     */
    readBatch(batch: KeyBatch<K>, options?: RequestOptions | undefined): DTO[] {
        throw new Error('Method not implemented.');
    }

    /**
     * Read all records from the table
     *
     * @param options
     *        The options provided through request; if any, to designate the
     *        desired response from the service.
     */
    readAll(options?: RequestOptions | undefined): DTO[] {
        throw new Error('Method not implemented.');
    }

    /**
     * Read one record from the table using the provided record key.
     *
     * @param key
     *        A single record identifier is provided
     * @param options
     *        The options provided through request; if any, to designate the
     *        desired response from the service.
     */
    readOne(key: K, options?: RequestOptions | undefined): DTO {
        throw new Error('Method not implemented.');
    }

    /**
     * Update the record identified by the given key using the properties from the given DTO object.
     *
     * @param key
     *        A single record identifier is provided
     * @param dto
     *        A DataTransferObject (DTO) providing the updated column values
     * @param options
     *        The options provided through request; if any, to designate the
     *        desired response from the service.
     */
    update(key: K, dto: DTO, options?: RequestOptions | undefined): DTO {
        throw new Error('Method not implemented.');
    }

    /**
     * Delete one record from the table using the provided record key.
     *
     * @param key
     *        A single record identifier is provided
     * @param options
     *        The options provided through request; if any, to designate the
     *        desired response from the service.
     */
    delete(key: K, options?: RequestOptions | undefined): DTO {
        throw new Error('Method not implemented.');
    }
}
