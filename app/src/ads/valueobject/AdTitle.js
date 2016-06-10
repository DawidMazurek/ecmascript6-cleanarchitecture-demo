import {InvalidAdIdException} from './InvalidAdTitleException';

export class AdTitle
{
    constructor(title)
    {
        if (!this.validate(title)) {
            throw new InvalidAdIdException();
        }
        this.title = title;
    }

    validate(title)
    {
        return title.length > 0;
    }

    getTitle()
    {
        return this.title;
    }
}