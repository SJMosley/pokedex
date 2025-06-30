import { clearInterval, setInterval } from "timers";

export interface CacheEntry<T> {
  createdAt: number;
  val: T;
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalID: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    const newEntry = {
      createdAt: Date.now(),
      val: val,
    };
    this.#cache.set(key, newEntry);
  }

  get<T>(key: string) {
    const entry = this.#cache.get(key);
    if (entry == undefined) {
      return entry;
    }

    return entry.val;
  }

  #reap() {
    for (const [key, val] of this.#cache.entries()) {
      if (val.createdAt < Date.now() - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }
  #startReapLoop() {
    this.#reapIntervalID = setInterval(this.#reap.bind(this), this.#interval);
  }
  stopReapLoop() {
    clearInterval(this.#reapIntervalID);
    this.#reapIntervalID = undefined;
  }
}
