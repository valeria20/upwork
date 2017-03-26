var MainPage=requre('./PageObject/MainPage.js');
var AdvancedFilters=requre('./PageObject/AdvancedFilters.js');
var PageObject=requre('./PageObject');
describe('test filter of www.upwork.com', function(){
    it('dearch for russian web developers', function(){
        var mainPage=new PageObject.MainPage();
        var andvancedFilters=new PageObject.AndvancedFilters();
        var searchedFreelancers="Web Developers";
        var searchedLocation="Russia";
		var expectedLocation="Russia";
        mainPage.get();
        /**
         * input to 'Find Freelancers' field 'Web Developers'
         * @param {string} searchedFreelancers - freelancers we should find
         */
        mainPage.findAllWebDevelopers(searchedFreelancers);
        advancedFilters.goToAdvancedfilters();
        /**
         * search russian Web Developers
         * @param {string} searchedLocation - country where web developers are located
         */
        advancedFilters.searchRussianWebDevelopers(searchedLocation);
        /**
         * list of location elements
         */
        var locations=element.all(by.xpath(".//*[@id='oContractorResults']//div[@class='no-wrap ellipsis']"));                    
        for(realLocation in locations){
            expect(realLocation.getText()).ToEqual(expectedLocation);
        }
    });
});
