declare module 'debouncer-js' {
    class Debouncer {
        constructor();

        /**
         * Creates a delayed callback function call and postpone it on each call repeat until the delay duration ends.
         * @param {function(...args: any[]): void} callback A named function should be passed. Anonymous functions and arrow functions may not
         * work properly.
         * @param {number} delay The delay to postpone the calling callback function in milliseconds.
         * @returns {function(...args: any[]): void} Debounced function derived from the passed callback.
         */
        debounce(callback: (...args: any[]) => void, delay: number);
        clear(callback: ((...args: any[]) => void) | string);
        flush();
    }
}
