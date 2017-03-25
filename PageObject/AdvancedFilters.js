var AdvancedFilters=function(){
    var advancedFilters=element(by.xpath(".//*[@id='oContractorFacets']//button[@class='btn btn-link m-md-top m-0-left m-0-bottom p-0-left-right p-xs-top-bottom']"));
    var searchLocationsInput=element(by.css("#location-search"));
    var updateFilters=element(by.xpath(".//*[@id='oContractorFacets']//button[@class='btn btn-primary m-0']"));
    
    var goToAdvancedfilters=function(){
        advancedFilters.click();
    };
   
    var searchRussianWebDevelopers=function(searchedLocation){
        searchLocationsInput.click().sendKeys(searchedLocation)
        .sendKeys(protractor.Key.ENTER);
        updateFilters.click();
    };
};
