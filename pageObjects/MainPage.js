/**
 * @author Valeria 27.03.2017
 * description of the main page of the web site is under test
 */
var MainPage=function () {
    var findFreelancersInput=element(by.xpath('html/body/div[1]/div/header[1]/div[1]/div[1]/form/div/input'));
    /**
     * @param {string} usrToGo - url of the web site is under test
     */
    this.openSite=function (urlToGo) {
        browser.driver.get(urlToGo);
    };
    /**
     * @param {stirng} searchedFreelancers - type of freelancers we should find
     */
    this.findAllWebDevelopers=function(searchedFreelancers){
    findFreelancersInput.click().sendKeys(searchedFreelancers)
    .sendKeys(protractor.Key.ENTER);
   };
};
module.exports=MainPage;