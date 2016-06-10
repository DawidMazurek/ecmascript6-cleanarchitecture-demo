import {AdFields} from './../mapper/AdFields';

export class AdsRepository
{
    constructor(adsGatewayAbstract, adHydrator, adFactory)
    {
        this.gateway = adsGatewayAbstract;
        this.hydrator = adHydrator;
        this.factory = adFactory;
    }

    /**
     * 
     * @param adId AdId
     * @returns Ad
     */
    findAdById(adId)
    {
        var criteria =[];
        criteria[AdFields.FIELD_AD_ID] = adId.getId();
        var adData = this.gateway.findOneBy(
            criteria
        );

        var ad = this.factory.create();

        return this.hydrator.hydrate(ad, adData);
    }

}