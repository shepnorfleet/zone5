import { Request, Response } from '@/api';
import { Model } from '@/models/Model';

export interface Controller<T extends Model> {
    id: string;
    name: string;
    create(request: Request, response: Response): Promise<void>;
    readAll(request: Request, response: Response): Promise<void>;
    readOne(request: Request, response: Response): Promise<void>;
    update(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
}
