declare module 'debouncer-js' {
    export default class Debouncer {
        constructor();

        /**
         * Creates a delayed callback function call and postpone it on each call repeat until the delay duration ends.
         * @param {function(...args: any[]): void} callback A named function should be passed. Anonymous functions and arrow functions may not
         * work properly.
         * @param {number} delay The delay to postpone the calling callback function in milliseconds.
         * @returns {function(...args: any[]): any} Debounced function derived from the passed callback.
         */
        debounce<T extends any, R extends any>(callback: (...args: T[]) => R, delay: number): (...args: T[]) => R;
        clear(callback: ((...args: any[]) => void) | string): void;
        flush(): void;
    }
}
