var MainPage = require('../pageObjects/MainPage.js');
var AdvancedFilters = require('../pageObjects/AdvancedFilters.js');
describe('test filter of www.upwork.com', function () {
var mainPage = new MainPage();
var advancedFilters = new AdvancedFilters();
it('dearch for russian web developers', function () {

var searchedFreelancers = "Web Developers";
var searchedLocation = "Russia";
var expectedLocation = "Russia";
mainPage.openSite();

mainPage.findAllWebDevelopers(searchedFreelancers);
advancedFilters.goToAdvancedfilters();

advancedFilters.searchRussianWebDevelopers(searchedLocation);

var locations = element.all(by.xpath(".//*[@id='oContractorResults']//div[@class='no-wrap ellipsis']"));
locations.then(function(locations){for (realLocation in locations) {
expect(realLocation.getText()).ToEqual(expectedLocation);
}
});
});
});