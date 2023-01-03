class Debouncer {
    constructor() {
        this.timeoutList = {}
    }

    /**
     * Creates a delayed callback function call and postpone it on each call repeat until the delay duration ends.
     * @param {function(...args: any[]): void} callback A named function should be passed. Anonymous functions and arrow functions may not
     * work properly.
     * @param {number} delay The delay to postpone the calling callback function in milliseconds.
     * @returns {function(...args: any[]): void} Debounced function derived from the passed callback.
     */
    debounce(callback, delay) {
        return (...args) => {
            if (this.timeoutList[callback.name]) {
                clearTimeout(this.timeoutList[callback.name])
            }
            this.timeoutList[callback.name] = setTimeout(callback, delay, args ?? [])
        }
    }


    clear(callback) {
        const foundTimeout = this.timeoutList[typeof callback === 'function' ? callback.name : callback]
        clearTimeout(foundTimeout)
        foundTimeout && delete this.timeoutList[typeof callback === 'function' ? callback.name : callback]
    }

    flush() {
        Object.keys(this.timeoutList).forEach(key => {
            clearTimeout(this.timeoutList[key])
            delete this.timeoutList[key]
        })
    }
}

module.exports = Debouncer