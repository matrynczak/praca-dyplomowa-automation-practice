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

    getRandOnlyLetterString(length) {
        let result = "";
        let allSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (let i = 0; i < length; i++)
            result += allSymbols.charAt(Math.floor(Math.random() * allSymbols.length));

        return result;
    },

    getSize(collection) {
        return collection.value.length - 1; // -1 because we need to know the size, not a length
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    selectRandomElementFromSelectList(listElementsCollection, selectedElementNumber) {
        listElementsCollection.value[selectedElementNumber].click();
    },

};

module.exports = helpFunctions;
