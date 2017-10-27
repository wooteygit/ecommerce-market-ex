import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenService } from '../../services/authen.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    constructor(private router: Router, private authenService: AuthenService) { }

    ngOnInit() {
    }

    logOut(): void {
        this.authenService.logOut();
        this.router.navigate(['/']);        
    }
}
