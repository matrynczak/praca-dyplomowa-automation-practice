let helpFunctions = {

    getLength(element) {
        return element.value.length;
    },

    getRandString(length) {
        let result = "";
        let allSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < length; i++)
            result += allSymbols.charAt(Math.floor(Math.random() * allSymbols.length));

        return result;
    },

    /**
     * @param collection of elements
     * return size of collection
     */
    getSize(collection) {
        return collection.value.length - 1; // -1 because we need to know the size, not a length
    },

    /**
     *
     * @param collection of elements
     * @param index of collection (optional param)
     * return locator by index or return the last locator
     */
    getLocatorFromCollection(collection, index) {
        if (index === "last") {
            return collection.value[this.getSize(collection)];
        } else if (index > this.getSize(collection)) {
            throw "Out Of Bounds Exception";
        } else {
            return collection.value[index];
        }
    },

    /**
     recommended to use if you want to choose number of input which user wants to fill in, i.e. in items in listings
     if there is only one particular input, recommended is using simple 'input.setValue(content)', i.e. to fill in login input
     **/
    fillContentToInput(inputCollection, inputCollectionElementNumber, content) {
        const input = this.getLocatorFromCollection(inputCollection, inputCollectionElementNumber);
        input.setValue(content);
    },

    /**
     * function adds value to filled already input field
     *
     * @param inputCollection
     * @param inputCollectionElementNumber
     * @param content
     */
    makeAmendmentInInput(inputCollection, inputCollectionElementNumber, content) {
        const input = this.getLocatorFromCollection(inputCollection, inputCollectionElementNumber);
        input.addValue(content);
    },

    /**
     * functions clears value of input set previously
     * @param inputCollection
     * @param inputCollectionElementNumber
     */
    clearInputValue(inputCollection, inputCollectionElementNumber) {
        const input = this.getLocatorFromCollection(inputCollection, inputCollectionElementNumber);
        browser.clearElement(input.selector);
    },

    /**
     *
     * @param min
     * @param max
     * return random number between min and max
     */
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     *
     * @param collection of elements
     * @param checkBoxNum count of check-boxes
     */
    selectRandomCheckBox(collection, checkBoxNum) {
        const size = this.getSize(collection);
        const index = (size < checkBoxNum) ? this.getRandomNumber(0, size) : this.getRandomNumber(size - checkBoxNum, size);
        collection.value[index].click();
    },

    createMapToJSONComparing(key, valueForKey, map) {
        return map.set(key, valueForKey);
    },

    /**
     * function sets random target from list of target options
     *
     * @param targetOptionsCollection - list of available target options, after previous opening dropdown list of targets
     */
    selectRandomTargetOption(targetOptionsCollection) {
        const randomTargetOption = Math.floor(Math.random() * 4);
        this.getLocatorFromCollection(targetOptionsCollection, randomTargetOption).click();
    },

    /**
     * draw random colour to set in colour field in form of widget
     * @param colourFieldsCollection
     */
    selectRandomColour(colourFieldsCollection) {
        const randomColourOption = Math.floor(Math.random() * 14);
        this.getLocatorFromCollection(colourFieldsCollection, randomColourOption).click();
    },

    /**
     * function expands list of targets related to URL field in any form
     *
     * @param targetDropdown - expected to open dropdown with targets list
     * @param index - point on expected dropdown, in case lots of target dropdowns in form
     */
    openTargetList(targetDropdown, index) {
        const target = this.getLocatorFromCollection(targetDropdown, index);
        target.click();
    },

    /**
     * function expands list of display on header options field in any form
     *
     * @param displayOptionsDropdown - expected to open dropdown with display options
     * @param index - point on expected dropdown, in case lots of displayElements dropdowns in form
     */
    openDisplayList(displayOptionsDropdown, index) {
        const displayOptionsField = this.getLocatorFromCollection(displayOptionsDropdown, index);
        displayOptionsField.click();
    },

    /**
     * function set displaying element on True - for testing purposes
     *
     * @param displayOptionsCollection - list of available display of element options, after previous opening dropdown list of options
     */
    chooseDisplayingElement(displayOptionsCollection) {
        this.getLocatorFromCollection(displayOptionsCollection, 0).click();
    },

    /**
     * function takes input field of tag, i.e. sports name and sets some symbol to search results in available tags
     * @param tagsFieldInput
     */
    fillTagsField(tagsFieldInput) {
        const exampleLetters = ["a", "e", "u", "i", "o"];
        const drawnLetterNum = Math.floor(Math.random() * (exampleLetters.length - 1));
        const rndLetter = exampleLetters[drawnLetterNum];

        tagsFieldInput.setValue(rndLetter);
    },

    /**
     * function takes list of displayed items and set random item from available
     * @param listOfItem
     */
    selectsRandomItemFromAvailableInDropdown(listOfItem) {
        const rndNumberOfItemFromList = this.getRandomNumber(0, this.getSize(listOfItem));

        listOfItem.value[rndNumberOfItemFromList].click();
    },

    /**
     * function is usable in case one checkbox in order enable/disable element
     *
     * @param checkbox
     */
    enableDisableCheckbox(checkbox) {
        const randomNum = this.getRandomNumber(0, 1);
        if (randomNum === 1) checkbox.click();
    },

    /**
     * function types phrase to search markets with 'vs' to have always some results
     * @param marketSearchInputCollection
     * @param marketSearchInputElementNum
     * @param searchedPhrase
     */
    fillMarketSearchField(marketSearchInputCollection, marketSearchInputElementNum, searchedPhrase) {
        this.getLocatorFromCollection(marketSearchInputCollection, marketSearchInputElementNum).setValue(searchedPhrase);
    },

    /**
     * function takes list of displayed markets and set random market from available
     * @param listOfMarkets
     */
    selectsRandomMarketFromSearchResults(listOfMarkets) {
        const rndNumberOfSportFromList = this.getRandomNumber(0, this.getSize(listOfMarkets));

        listOfMarkets.value[rndNumberOfSportFromList].click();
    },

    /**
     * function adds tagsname by clicking Enter
     * @param tagName
     * @param input
     */
    addTagToInput(tagName, input) {
        input.setValue(tagName);
        browser.keys("Enter")
    }

};

module.exports = helpFunctions;
