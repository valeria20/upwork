/**
 * @author Valeria 27.03.2017
 * description of the page contains advanced filter
 */
var AdvancedFilters = function () {
    var advancedFilters = element(by.xpath(".//*[@id='oContractorFacets']//button[@class='btn btn-link m-md-top m-0-left m-0" +
        "-bottom p-0-left-right p-xs-top-bottom']"));
    var searchLocationsInput = element(by.css("#location-search"));
    var updateFilters = element(by.xpath(".//*[@id='oContractorFacets']//button[@class='btn btn-primary m-0']"));
    var locations = element.all(by.xpath(".//*[@id='oContractorResults']//div[@data-country='Russia']"));
    var expectedLocation="Russia";

    this.goToAdvancedFilters = function () {
        advancedFilters.click();
    };
    /**
     * @method searchRussianWebDevelopers - input to advanced filter location we should to find
     * @param searchedLocation - country where web developers are located
     */
    this.searchRussianWebDevelopers = function (searchedLocation) {
        searchLocationsInput
            .click()
            .sendKeys(searchedLocation)
            .sendKeys(protractor.Key.ENTER);
        updateFilters.click();	
    };

    this.checkLocation = function () {
        var location = locations.getText();
        location.then(function (data) {
            data
                .map(function (data) {
                    expect(data).toEqual(expectedLocation);
                })
        });
    };
};
module.exports = AdvancedFilters;
