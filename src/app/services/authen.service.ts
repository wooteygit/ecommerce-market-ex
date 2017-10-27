import 'rxjs/add/operator/toPromise';

import { Observable, Subscription } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment, Config } from '../../environments/environment';

import { StorageService } from './storage.service';

import { UserModel } from '../models/user.model';

@Injectable()
export class AuthenService {
    user: UserModel = null;
    url: string = null;

    constructor(private http: HttpClient, private storageService: StorageService) { }

    private authorizationHeader(): any {
        let token: string = this.storageService.get('access_token');
        return { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`) };
    }

    load(): void {
        this.user = this.storageService.get('user');
    }

    me(): Promise<any> {
        return this.http.get(Config.ServiceUrl + '/me', this.authorizationHeader())
            .toPromise()
            .then((data: any) => {
                this.user = data;
                this.storageService.set('user', data);
                return data;
            });
    }

    logIn(email: string, password: string): Promise<any> {
        let body: any = {
            email: email,
            password: password
        };
        let params: URLSearchParams = new URLSearchParams();
        params.set('client_id', environment.client_id);
        params.set('client_secret', environment.client_secret);
        
        return this.http.post(Config.ServiceUrl + '/login?' + params.toString(), body)
            .toPromise()
            .then((data: any) => {
                if (data.error) {
                    throw data;
                }
                else {
                    this.storageService.set('access_token', data.access_token);
                    return this.me();
                }
            })
            .catch((data: any) => {
                return data;
            });
    }
    
    logOut(): void {
        this.user = null;
        this.storageService.remove('user');
        this.storageService.remove('cart');
    }
}
