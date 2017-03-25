describe('test filter of www.upwork.com', function(){
    it('dearch for russian web developers', function(){
        var mainPage=new MainPage();
        var andvancedFilters=new andvancedFilters();
        var searchedFreelancers="Web Developers";
        var searchedLocation="Russia";
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
    });
});
