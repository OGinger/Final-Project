var homePage = {}
var verifyLink = require('../testAssets/testFunctions')
var verifyLinkVisible = require('../testAssets/testFunction2')
var searchItem = [
    "Garden Hose",
    "sleeping bag",
    "speakers",
    "Lightsaber",
    "planet",
    "piggy bank"
]
//Test Plan https://dmutah.atlassian.net/browse/Q9C-71
module.exports = {
    beforeEach: browser => {
        homePage = browser.page.objectPage()
        homePage.navigate()
        homePage.click('@gotIt')

    },
    after: browser => {
        browser.end()
    },
    //https://dmutah.atlassian.net/browse/Q9C-72
    'Search Link': () => {
        homePage
            .click('@searchLink')
            .expect.element('@searchPageElement').to.be.visible.before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-73
    'List An Item Link': () => {
        homePage
            .click('@listAnItem')
            .expect.element('@listPageElement').to.be.visible.before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-74
    'Log In Link': () => {
        homePage
            .click('@logIn')
            .expect.element('@logPageElement').to.be.visible.before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-75
    'Sign Up Link': () => {
        homePage
            .click('@signUp')
            .expect.element('@signPageElement').to.be.visible.before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-76
    'Browse Link': () => {
        homePage
            .click('@browseLink')
            .expect.element('@searchPageElement').to.be.visible.before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-79
    'Facebook Link': () => {
        homePage
            .click('@faceBookIcon')
            .expect.element('@fbElement').text.to.contain('Facebook').before(5000)
    },
    //https://dmutah.atlassian.net/browse/Q9C-79
    'Twitter Link': () => {
        homePage
            .click('@twitterIcon')
            .expect.element('@twitterElement').to.be.visible.before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-79
    'Instagram Link': () => {
        homePage
            .click('@instagramIcon')
            .expect.element('@instagramElement').to.be.visible.before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-79
    'Terms Link': () => {
        homePage
            .click('@termsLink')
            .expect.element('@termsElement').text.to.contain('Policies').before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-79
    'Privacy Link': () => {
        homePage
            .click('@privacyLink')
            .expect.element('@privacyElement').text.to.contain('Privacy').before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-79
    'It verifies links in footer': () => {
        verifyLink(homePage, '@tools', '@categoryFilterTag', 'Tools')
        verifyLink(homePage, '@recreationalVehicles', '@categoryFilterTag', 'Recreational Vehicles')
        verifyLink(homePage, '@clothing', '@categoryFilterTag', 'Clothing')
        verifyLink(homePage, '@partyEquipment', '@categoryFilterTag', 'Party Equipment')
        verifyLink(homePage, '@homeKitchen', '@categoryFilterTag', 'Home and Kitchen')
        verifyLink(homePage, '@partyEquipment', '@categoryFilterTag', 'Party Equipment')
        verifyLink(homePage, '@electronics', '@categoryFilterTag', 'Electronics')

    },
    //https://dmutah.atlassian.net/browse/Q9C-79
    'It verifies links in footer 2': () => {
        verifyLinkVisible(homePage, '@browse', '@searchPageElement2')
        verifyLinkVisible(homePage, '@itemList', '@logInElement')
        verifyLinkVisible(homePage, '@profile', '@logInElement')
        verifyLinkVisible(homePage, '@all', '@searchPageElement2')
        verifyLinkVisible(homePage, '@home', '@homePageElement')
    },

    //https://dmutah.atlassian.net/browse/Q9C-77
    'Search Item from Homepage Search Bar': () => {
        homePage
            .setValue('@searchBar', 'camping')
            .click('@searchBarButton')
            .waitForElementVisible('@searchElement', 500)
    },

    //https://dmutah.atlassian.net/browse/Q9C-80
    'Search Here Bar on Search Page': () => {
        homePage
            .click('@searchLink')
            .waitForElementVisible('@searchPageElement', 50000)
        homePage.setValue('@searchHereBar', [searchItem[0], homePage.api.Keys.ENTER])
        homePage.waitForElementVisible('@keywordFilterTag', 5000)
        homePage.expect.element('@keywordFilterTag').text.to.contain(searchItem[0]).before(5000)
        homePage.expect.element('@title').text.to.contain(searchItem[0]).before(5000)
    },
    //https://dmutah.atlassian.net/browse/Q9C-81
    'Results not found Message from homepage': () => {
        homePage
            .setValue('@searchBar', searchItem[4])
            .click('@searchBarButton')
            .expect.element('@noResults').text.to.contain('No Results').before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-81
    'Results not found Message from Search page': () => {
        homePage
            .click('@searchLink')
        homePage.api.pause(5000)
        homePage.setValue('@searchHereBar', [searchItem[4], homePage.api.Keys.ENTER])
            .expect.element('@noResults').text.to.contain('No Results').before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-86
    'It verifies links in Browse Category Section': () => {
        homePage
        verifyLink(homePage, '@tools2', '@categoryFilterTag', 'Tools')
        verifyLink(homePage, '@outdoorGear2', '@categoryFilterTag', 'Outdoor Gear')
        verifyLink(homePage, '@electronics', '@categoryFilterTag', 'Electronics')
        verifyLink(homePage, '@partyEquipment2', '@categoryFilterTag', 'Party Equipment')
        homePage.click('@recreationalVehicles2')
        homePage.waitForElementVisible('@categoryFilterTag', 5000)
        homePage.expect.element('@categoryFilterTag').text.to.contain('Recreational Vehicles').before(5000)
        homePage.api.pause(4000)
        homePage.click('@homeIcon')
        verifyLink(homePage, '@clothing2', '@categoryFilterTag', 'Clothing')
        verifyLink(homePage, '@homeKitchen2', '@categoryFilterTag', 'Home and Kitchen')
        verifyLink(homePage, '@toysGames', '@categoryFilterTag', 'Toys and Games')
        verifyLink(homePage, '@lawnGarden', '@categoryFilterTag', 'Lawn and Garden')
        verifyLink(homePage, '@sportingGoods', '@categoryFilterTag', 'Sporting Goods')
        verifyLink(homePage, '@businessEquipment', '@categoryFilterTag', 'Business Equipment')
        verifyLink(homePage, '@venues', '@categoryFilterTag', 'Venues')
        verifyLink(homePage, '@localExperts', '@categoryFilterTag', 'Local Experts')
        verifyLink(homePage, '@experiences', '@categoryFilterTag', 'Experiences')
        verifyLink(homePage, '@misc', '@categoryFilterTag', 'Misc')

    },

    //https://dmutah.atlassian.net/browse/Q9C-96
    'Middle Home Page Section Category Links': () => {
        homePage
        verifyLink(homePage, '@tools3', '@categoryFilterTag', 'Tools')
        verifyLink(homePage, '@outdoorGear3', '@categoryFilterTag', 'Outdoor Gear')
        verifyLink(homePage, '@electronics3', '@categoryFilterTag', 'Electronics')
        verifyLink(homePage, '@partyEquipment3', '@categoryFilterTag', 'Party Equipment')
        verifyLink(homePage, '@recreationalVehicles3', '@categoryFilterTag', 'Recreational Vehicles')
        verifyLink(homePage, '@clothing3', '@categoryFilterTag', 'Clothing')
        verifyLink(homePage, '@homeKitchen', '@categoryFilterTag', 'Home and Kitchen')
        verifyLink(homePage, '@toysGames3', '@categoryFilterTag', 'Toys and Games')
        verifyLink(homePage, '@lawnGarden3', '@categoryFilterTag', 'Lawn and Garden')
        verifyLink(homePage, '@sportingGoods3', '@categoryFilterTag', 'Sporting Goods')
        verifyLink(homePage, '@businessEquipment3', '@categoryFilterTag', 'Business Equipment')
        verifyLink(homePage, '@venues3', '@categoryFilterTag', 'Venues')
        verifyLink(homePage, '@localExperts3', '@categoryFilterTag', 'Local Experts')
        verifyLink(homePage, '@experiences3', '@categoryFilterTag', 'Experiences')
        verifyLink(homePage, '@misc3', '@categoryFilterTag', 'Misc')
    },

}



