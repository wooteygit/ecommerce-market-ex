import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogElement } from './elements/dialog/dialog.element';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DialogElement
    ],
    providers: [
    ],
    exports: [
        DialogElement
    ]
})
export class SharedModule { }
