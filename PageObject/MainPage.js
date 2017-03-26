
var MainPage=function () {
    var findFreelancersInput=element(by.model('query'));
    var urlToGo='https://www.upwork.com/';
    this.get=function (urlToGo) {
        browser.get(urlToGo);
    };

    this.findAllWebDevelopers=function(searchedFreelancers){
    findFreelancersInput.click().sendKeys(searchedFreelancers)
    .sendKeys(protractor.Key.ENTER);
   };
};
module.exports=MainPage;