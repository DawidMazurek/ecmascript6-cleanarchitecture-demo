import {AdsGatewayAbstract} from './AdsGatewayAbstract';

export class AdsDummyAjaxGateway extends AdsGatewayAbstract
{
    findOneBy(criteria)
    {
        return {"ad_id": 1, "title": "test"};
    }
}