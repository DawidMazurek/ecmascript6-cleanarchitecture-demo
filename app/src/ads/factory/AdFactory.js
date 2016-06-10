import {Ad} from './../entity/Ad';

export class AdFactory
{
    create()
    {
        return new Ad();
    }
}