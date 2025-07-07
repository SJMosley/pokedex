import { clearInterval, setInterval } from "timers";
export class Cache {
    #cache = new Map();
    #reapIntervalID = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add(key, val) {
        const newEntry = {
            createdAt: Date.now(),
            val: val,
        };
        this.#cache.set(key, newEntry);
    }
    get(key) {
        const entry = this.#cache.get(key);
        if (entry == undefined) {
            return entry;
        }
        return entry.val;
    }
    #reap() {
        const now = Date.now();
        for (const [key, val] of this.#cache.entries()) {
            if (val.createdAt < now - this.#interval) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        this.#reapIntervalID = setInterval(() => {
            this.#reap();
        }, this.#interval);
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalID);
        this.#reapIntervalID = undefined;
    }
}
