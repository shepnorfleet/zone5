import { Model } from '@/models/Model';
import { Controller } from '@/controller/Controller';
import { Request } from '@/api';
import { Response } from 'express';
import { Context } from '@/api/Context';

/**
 *
 */
class BaseController<T extends Model> implements Controller<T> {
    protected _id: string;
    protected _name: string;
    protected _path: string;
    protected _context: Context;

    /**
     * CTOR
     *
     * @param id
     *        The unique identifier assigned to this controller
     * @param name
     *        The human readable name of this controller
     * @param path
     *        The path this controller is accessible from
     * @param context
     *        The API context object
     */
    constructor(id: string, name: string, path: string, context: Context) {
        this._id = id;
        this._name = name;
        this._path = path;
        this._context = context;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get path(): string {
        return this._path;
    }

    create(
        request: Request,
        response: Response<any, Record<string, any>>
    ): Promise<void> {
        throw new Error('Method not implemented.');
    }
    readAll(
        request: Request,
        response: Response<any, Record<string, any>>
    ): Promise<void> {
        throw new Error('Method not implemented.');
    }
    readOne(
        request: Request,
        response: Response<any, Record<string, any>>
    ): Promise<void> {
        throw new Error('Method not implemented.');
    }
    update(
        request: Request,
        response: Response<any, Record<string, any>>
    ): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(
        request: Request,
        response: Response<any, Record<string, any>>
    ): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
