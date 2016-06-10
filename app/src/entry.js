var searchForAd = new GetAdById(
    new AdsRepository(
        new AdsDummyAjaxGateway(),
        new AdHydrator(),
        new AdFactory()
    ),
    new AdId(1)
);

var ad = searchForAd.execute();

console.log(ad);

