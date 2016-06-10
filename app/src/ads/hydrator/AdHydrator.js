import {AdId} from './../valueobject/AdId';
import {AdTitle} from './../valueobject/AdTitle';
import {AdFields} from './../mapper/AdFields';

export class AdHydrator
{
    extract(ad)
    {
        var data = [];

        data[AdFields.FIELD_AD_ID] = ad.id.getId();
        data[AdFields.FIELD_TITLE] = ad.title.getTitle();

        return data;
    }

    hydrate(ad, adData    )
    {
        ad.id = new AdId(adData[AdFields.FIELD_AD_ID]);
        ad.title = new AdTitle(adData[AdFields.FIELD_TITLE]);

        return ad;
    }
}