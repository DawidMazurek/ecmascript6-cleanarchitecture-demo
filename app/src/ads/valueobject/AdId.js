import {InvalidAdIdException} from './InvalidAdIdException';

export class AdId
{
    constructor(id)
    {
        if (!this.validate(id)) {
            throw new InvalidAdIdException();
        }
        this.id = id;
    }

    validate(id)
    {
        return id > 0;
    }

    getId()
    {
        return this.id;
    }
}