module.exports = {
    url: 'https://alpha.yoodlize.com',
    elements: {
        //homepage selectors
        gotIt: 'button[class="sc-uJMKN jtUFi sc-ifAKCX kvYMhQ"]',
        searchLink: {
            selector: '(//div[@class="sc-jqCOkK hXaYBt sc-gqjmRU fptSCa"])[1]',
            locateStrategy: 'xpath'
        },
        searchPageElement: 'input[name="keyword"]',
        searchPageElement2: 'div[class="b-0 bb-1 b-cool-gray-light mb-l sc-bwzfXH hFUbDu sc-bdVaJa iHZvIS"]',
        listAnItem: {
            selector: '(//div[@class="sc-jqCOkK hXaYBt sc-gqjmRU fptSCa"])[2]',
            locateStrategy: 'xpath'
        },
        listPageElement: 'div[class="Login-container-2IZbL"]',
        logIn: {
            selector: '(//div[@class="sc-jqCOkK hXaYBt sc-gqjmRU fptSCa"])[3]',
            locateStrategy: 'xpath'
        },
        logPageElement: 'div[class="LoginModal-root-2fzcd"]',
        logInElement: 'strong[class="Login-lineThrough-2wlls"]',
        signUp: {
            selector: '(//div[@class="sc-jqCOkK hXaYBt sc-gqjmRU fptSCa"])[4]',
            locateStrategy: 'xpath'
        },
        signPageElement: 'div[class="SignupModal-signupModalBody-15AxG"]',
        browseLink: 'div[class="sc-jqCOkK gHFZXb sc-gqjmRU hGySrO"]',
        homeIcon: 'a[class="Header-brand-2oS_y Header-brandImg-1BgQy navbar-brand"]',
        homePageElement: {
            selector: '//div[contains(text(), "Yoodlize")]',
            locateStrategy: 'xpath',
        },
        //Footer Selectors
        faceBookIcon: 'i[class="fab fa-facebook"]',
        fbElement: 'i[class="fb_logo img sp_tTFJrcS6MlH sx_8baab9"]',
        twitterIcon: 'i[class="fab fa-twitter-square"]',
        twitterElement: {
            selector: '(//span[@class="Icon Icon--bird Icon--large"])[1]',
            locateStrategy: 'xpath'
        },
        instagramIcon: 'i[class="fab fa-instagram"]',
        instagramElement: 'span[class="glyphsSpriteMobile_nav_type_logo u-__7"]',
        termsLink: {
            selector: '(//div[@class="sc-jqCOkK kChnRx sc-gqjmRU fptSCa"])[1]',
            locateStrategy: 'xpath'
        },
        termsElement: 'div[class="Page-container-QOUG7"]',
        privacyLink: {
            selector: '(//div[@class="sc-jqCOkK kChnRx sc-gqjmRU fptSCa"])[2]',
            locateStrategy: 'xpath'
        },
        privacyElement: 'div[class="Page-container-QOUG7"]',
        home: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU cgDkKc"])[1]',
            locateStrategy: 'xpath'
        },
        tools: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU cgDkKc"])[2]',
            locateStrategy: 'xpath'
        },
        recreationalVehicles: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU cgDkKc"])[3]',
            locateStrategy: 'xpath'
        },
        browse: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[1]',
            locateStrategy: 'xpath'
        },
        itemList: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[2]',
            locateStrategy: 'xpath'
        },
        profile: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[3]',
            locateStrategy: 'xpath'
        },
        outdoorGear: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[4]',
            locateStrategy: 'xpath'
        },
        partyEquipment: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[5]',
            locateStrategy: 'xpath'
        },
        electronics: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[6]',
            locateStrategy: 'xpath'
        },
        clothing: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[7]',
            locateStrategy: 'xpath'
        },
        homeKitchen: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[8]',
            locateStrategy: 'xpath'
        },
        all: {
            selector: '(//div[@class="sc-jqCOkK jhRYtJ sc-gqjmRU fXlLvD"])[9]',
            locateStrategy: 'xpath'
        },
        searchForAnItem: {
            selector: '//input[@placeholder="Search for an item"]',
            locateStrategy: 'xpath'
        },

        //Search Selectors
        searchBar: 'input[type="text"]',
        searchBarButton: 'i[class="fal fa-search"]',
        searchElement: 'div[class="SearchResults-resultsContainer-1wMhD"]',
        noResults: 'div[class="NoResults-root-2jD5u"]',
        searchPageElement: 'div[class="SearchResults-searchResults-1-W6C"]',
        searchHereBar: 'input[name="keyword"]',
        searchHereButton: 'button[class="sc-uJMKN clrdLJ sc-ifAKCX kvYMhQ"]',
        title: 'div[id="card-title"]',
        keywordFilterTag: {
            selector: '//div[contains(text(), "keyword:")]',
            locateStrategy: 'xpath'
        },
        categoryFilterTag: {
            selector: '//div[contains(text(), "category:")]',
            locateStrategy: 'xpath'
        },
        advancedSearch: 'div[class="sc-jqCOkK NqsLm sc-gqjmRU SUbM"]',
        homeKitchenCheckBox: 'input[name="Home and Kitchen_checkbox"]',

        //Browse Categories Section Selectors
        tools2: 'div[class="sc-eTuwsz bIdFMw"]',
        outdoorGear2: 'div[class="sc-eTuwsz clttCh"]',
        electronics2: 'div[class="sc-eTuwsz iuCbzf"]',
        partyEquipment2: 'div[class="sc-eTuwsz gyJYil"]',
        recreationalVehicles2: 'div[class="sc-eTuwsz gYTiov"]',
        clothing2: 'div[class="sc-eTuwsz jPbhBl"]',
        homeKitchen2: {
            selector: '(//div[@class="sc-eTuwsz hixpyV"])[1]',
            locateStrategy: 'xpath'
        },
        toysGames: 'div[class="sc-eTuwsz dnbzho"]',
        lawnGarden: {
            selector: '(//div[@class="sc-eTuwsz hixpyV"])[2]',
            locateStrategy: 'xpath',
        },
        sportingGoods: 'div[class="sc-eTuwsz eOhAZE"]',
        businessEquipment: 'div[class="sc-eTuwsz jWOIEN"]',
        venues: 'div[class="sc-eTuwsz MNUMw"]',
        localExperts: {
            selector: '(//div[@class="sc-eTuwsz dEmuKb"])[1]',
            locateStrategy: 'xpath',
        },
        experiences: {
            selector: '(//div[@class="sc-eTuwsz dEmuKb"])[2]',
            locateStrategy: 'xpath',
        },
        misc: {
            selector: '(//div[@class="sc-eTuwsz dEmuKb"])[3]',
            locateStrategy: 'xpath',
        },
        //Home page middle section category selectors
        tools3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]',
            locateStrategy: 'xpath',
        },
        outdoorGear3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]',
            locateStrategy: 'xpath',
        },
        electronics3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]',
            locateStrategy: 'xpath',
        },
        partyEquipment3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]',
            locateStrategy: 'xpath',
        },
        recreationalVehicles3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]',
            locateStrategy: 'xpath',
        },
        clothing3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]',
            locateStrategy: 'xpath',
        },
        homeKitchen3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]',
            locateStrategy: 'xpath',
        },
        toysGames3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]',
            locateStrategy: 'xpath',
        },
        lawnGarden3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]',
            locateStrategy: 'xpath',
        },
        sportingGoods3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]',
            locateStrategy: 'xpath',
        },
        businessEquipment3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]',
            locateStrategy: 'xpath',
        },
        venues3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]',
            locateStrategy: 'xpath',
        },
        localExperts3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]',
            locateStrategy: 'xpath',
        },
        experiences3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]',
            locateStrategy: 'xpath',
        },
        misc3: {
            selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]',
            locateStrategy: 'xpath',
        },
    },


}