import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from '../../../environments/environment';

import { AuthenService } from '../../services/authen.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    appName = Config.AppName;
    email: string;
    password: string;

    constructor(private router: Router, private authenService: AuthenService) { }

    ngOnInit() {
    }

    logIn() {
        this.authenService.logIn(this.email, this.password).then((data: any) => {
            if (!data.error) {
                let redirect = this.authenService.url ? this.authenService.url : '/';
                this.router.navigate([redirect]);                
            }
        });
    }
}
