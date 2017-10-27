import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: "tree-menu",
    styles: [`:host {
        display: block;
    }`],
    template: `
        <ul class="list-unstyled" *ngIf="items.length">
            <li class="pl-2" *ngFor="let item of items">
                <a routerLink="/category/{{item.id}}" class="d-block pt-1 pb-1 pl-2 pr-2">{{item.name}}</a>
                <tree-menu *ngIf="item[child] && item[child].length" [child]="child" [data]="item[child]"></tree-menu>
            </li>
        </ul>
    `
})
export class TreeMenuElement {
    @Input('data') items: any[];
    @Input('child') child: string;
}