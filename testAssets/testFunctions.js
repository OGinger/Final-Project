module.exports = (pageObject, link, filterTag, category) => {
    pageObject
    pageObject.click(link)
    pageObject.waitForElementVisible(filterTag, 5000)
    pageObject.expect.element(filterTag).text.to.contain(category).before(5000)
    pageObject.api.pause(4000)
    pageObject.click('@homeIcon')
}
