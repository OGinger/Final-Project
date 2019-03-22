module.exports = (pageObject, link, filterTag) => {
    pageObject
        .click(link)
        .waitForElementVisible(filterTag, 5000)
    pageObject.click('@homeIcon')

}