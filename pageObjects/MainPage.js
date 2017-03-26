
var MainPage=function () {
    var findFreelancersInput=element(by.model('query'));
    var urlToGo='https://www.upwork.com/';
    this.openSite=function (urlToGo) {
        browser.driver.get(urlToGo);
    };

    this.findAllWebDevelopers=function(searchedFreelancers){
    findFreelancersInput.click().sendKeys(searchedFreelancers)
    .sendKeys(protractor.Key.ENTER);
   };
};
module.exports=MainPage;