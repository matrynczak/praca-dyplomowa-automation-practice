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
    }

};

module.exports = helpFunctions;
