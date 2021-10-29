/**
 * @desc This is function used to provide functionality of debounce
 *  If function call multiple time like onKeyUp event or onClick so debounce provide
 *  wait for user final input then call API rather then use  every click  or onKeyUp event call API
 * @param {*} func
 * @param {*} timeout
 * @returns
 */
function debounce(func, timeout = 300) {
    let timer;
    /**
     * Step 1: event perform at first time it wait 300ms for execute function
     * Step 2: function call another time with 300ms , then it clear before timer and start again timer
     * if not input come b/w timer then call execute function
     */
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args); // With apply, you can write a method once, and then inherit it in another object, without having to rewrite the method for the new object.
        }, timeout);
    };
}
//Save the Data
function saveInput() {
    console.log("Saving data");
}
//Call debounce function
const processChange = debounce(() => saveInput());
