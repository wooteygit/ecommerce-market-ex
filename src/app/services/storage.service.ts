import { PLATFORM_ID, Inject, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Config } from '../../environments/environment';

@Injectable()
export class StorageService {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
    
    set(key: string, data: any): void {
        if (isPlatformBrowser(this.platformId)) {
            key = Config.StoragePrefix + key;
            localStorage.setItem(key, JSON.stringify(data));
        }
    }

    get(key: string) {
        if (isPlatformBrowser(this.platformId)) {
            key = Config.StoragePrefix + key;
            let data = localStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
        }
        return null;
    }

    remove(key: string) {
        if (isPlatformBrowser(this.platformId)) {
            key = Config.StoragePrefix + key;
            localStorage.removeItem(key);
        }
    }
}
