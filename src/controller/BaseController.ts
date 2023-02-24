import { Model } from 'models/Model';
import { Controller } from 'controller/Controller';
import { Request } from 'core';
import { Response } from 'express';
import { Context } from 'core/Context';

/**
 * Basic CRUD Controller
 */
export class BaseController<T extends Model> implements Controller<T> {
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

    /**
     * Retrieve controller identifier
     *
     * @return string
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Retrieve controller name
     *
     * @return string
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Retrieve controller path
     *
     * @return string
     */
    public get path(): string {
        return this._path;
    }

    /**
     * Create a new data entity
     *
     * @param request
     *        The request object
     * @param response
     *        The response object
     *
     * @return Promise<void>
     */
    public create(
        request: Request,
        response: Response<any, Record<string, any>>
    ): Promise<void> {
        throw new Error('Method not implemented.');
    }

    /**
     * Read all data entities availabe in the database table
     *
     * @param request
     *        The request object
     * @param response
     *        The response object
     *
     * @return Promise<void>
     */
    public readAll(
        request: Request,
        response: Response<any, Record<string, any>>
    ): Promise<void> {
        throw new Error('Method not implemented.');
    }

    /**
     * Read one data entity specified by a provided identifer in the request
     *
     * @param request
     *        The request object
     * @param response
     *        The response object
     *
     * @return Promise<void>
     */
    public readOne(
        request: Request,
        response: Response<any, Record<string, any>>
    ): Promise<void> {
        throw new Error('Method not implemented.');
    }

    /**
     * Update an existing record
     *
     * @param request
     *        The request object
     * @param response
     *        The response object
     *
     * @return Promise<void>
     */
    public update(
        request: Request,
        response: Response<any, Record<string, any>>
    ): Promise<void> {
        throw new Error('Method not implemented.');
    }

    /**
     *
     * @param request
     *        The request object
     * @param response
     *        The response object
     *
     * @return Promise<void>
     */
    public delete(
        request: Request,
        response: Response<any, Record<string, any>>
    ): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
