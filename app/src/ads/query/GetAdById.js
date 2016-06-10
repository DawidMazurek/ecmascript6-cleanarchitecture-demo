export class GetAdById
{

    constructor(adsRepository, adId)
    {
        this.repository = adsRepository;
        this.adId = adId;
    }

    execute()
    {
        return this.repository.findAdById(this.adId);
    }
}