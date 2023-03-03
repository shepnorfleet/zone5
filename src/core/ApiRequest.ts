import { Request } from 'express';
import { Context } from 'core/Context';

export interface ApiRequest extends Request {
    context?: Context;
}
