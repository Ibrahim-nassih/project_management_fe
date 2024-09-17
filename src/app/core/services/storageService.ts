import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {}

    saveValue(key: string, value: any) {

        localStorage.setItem(key, JSON.stringify(value))

    }

    retrieveValue(key: any) {
        return (localStorage.getItem(key)) ?  JSON.parse(localStorage.getItem(key) || '') : ''
    }

    removeValue(key: string): void {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}
