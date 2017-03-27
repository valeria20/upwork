
var MainPage=function () {
    var findFreelancersInput=element(by.model('query'));
    
    this.openSite=function (urlToGo) {
        browser.driver.get(urlToGo);
    };

    this.findAllWebDevelopers=function(searchedFreelancers){
    findFreelancersInput.click().sendKeys(searchedFreelancers)
    .sendKeys(protractor.Key.ENTER);
   };
};
module.exports=MainPage;