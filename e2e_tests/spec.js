var MainPage = require('../pageObjects/MainPage.js');
var AdvancedFilters = require('../pageObjects/AdvancedFilters.js');

var urlToGo = 'https://www.upwork.com/';
/**
 * Test scenario. Find all web developers from Russia
 * and check the correctness of the site's advanced filter
 */
describe('test filter of www.upwork.com', function () {
    var mainPage = new MainPage();
    var advancedFilters = new AdvancedFilters();
    it('should search for russian web developers', function () {
        var searchedFreelancers = "Web Developers";
        var searchedLocation = "Russia";
        var expectedLocation = "Russia";
        /**
         * @param {string} urlToGo - url of web site under test
         */
         mainPage.openSite(urlToGo);
        /**
         * @method findAllWebDevelopers - input to 'Find Freelancers' field 'Web Developers'
         * @param {string} searchedFreelancers - freelancers we should find
         */
        mainPage.findAllWebDevelopers(searchedFreelancers);
        advancedFilters.goToAdvancedFilters();
        /**
         * @method searchRussianWebDevelopers - search russian Web Developers
         * @param {string} searchedLocation - country where web developers are located
         */
        advancedFilters.searchRussianWebDevelopers(searchedLocation);
        /**
         * locations - collection of elements that view the location of the web developer
         */
        var locations=element.all(by.xpath(".//*[@id='oContractorResults']//div[@class='no-wrap ellipsis']"));
        locations.then(function (data) {
            for (var realLocation in data) {     
            expect(realLocation.getText()).toEqual(expectedLocation);  
            }
        });
    });
});